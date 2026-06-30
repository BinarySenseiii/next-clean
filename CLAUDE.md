# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Open-source Next.js starter template (Next.js 16 App Router + Turbopack, React 19, TypeScript 5 strict, Tailwind CSS v4, Shadcn-style setup). Package manager is **yarn**.

## Commands

```bash
yarn dev                 # dev server (Turbopack)
yarn build               # production build
yarn start               # serve production build
yarn typecheck           # tsc --noEmit — run this to verify types (no test suite exists)
yarn lint                # next lint
yarn lint:fix            # eslint --fix
yarn format:write        # prettier --write across the repo
yarn analyze             # bundle analysis (ANALYZE=true build)
yarn check-unused:pkgs   # depcheck for unused deps
```

There is **no test framework** configured — verification is `yarn typecheck` + `yarn lint`. Commits go through Husky + lint-staged (eslint + prettier on staged `src` files) and commitlint (`@commitlint/config-conventional`, e.g. `feat:`, `chore:`), so commit messages must follow the conventional format.

## Conventions

- **Path alias:** `~/*` maps to `src/*` (e.g. `import { cn } from '~/utils'`). Always import via `~/`, never long relative paths across modules.
- **Barrel exports:** nearly every directory has an `index.ts` that re-exports its contents. When adding a file, wire it into the local `index.ts` so it's reachable via the directory import (e.g. `~/utils`, `~/modules/products`, `~/config`).
- **Prettier** (`.prettierrc.json`): no semicolons, single quotes, **3-space tabs**, 120 print width, trailing commas, `arrowParens: avoid`. Match this exactly. (Some files mid-refactor have 2-space/semicolon formatting — `format:write` normalizes them.)
- **ESLint** enforces `simple-import-sort` (grouped/ordered imports), inline type imports (`import { type Foo }`), and `newline-before-return`.

## Architecture

Feature code lives under `src/modules/<feature>/` (e.g. `products`), each a self-contained slice:
- `api/` — query-key factories (`product-query-keys.ts`) + raw API functions
- `hooks/` — TanStack Query hooks (`use-*.ts` queries, `use-*-mutation.ts` mutations)
- `store/` — feature Zustand store
- `types.ts`, `index.ts` (barrel)

Cross-cutting layers in `src/`:
- `lib/api/` — type-safe HTTP layer. `interceptor.ts` is the configured Axios instance (baseURL from `appConfig.domainName`, auth-header request interceptor, status-code response interceptor). `client.ts` exposes `apiRequest<T>(method, endpoint, data?, config?)` — the generic wrapper all API calls should use; endpoints are typed via `ApiRouteKeys` from `~/constants/api-endpoints.ts`.
- `lib/store/` — `createStore<T>(creator, config?)` factory wrapping Zustand with **immer** (mutate state directly in `set`) and **persist** middleware. Pass `{ skipPersist: true }` for non-persisted stores, or `{ name }` to set the localStorage key. Stores expose granular selector hooks (e.g. `useProducts`, `useProductActions`) rather than returning the whole store.
- `integrations/` — app-wide providers. `index.tsx` composes a `providers` array via `reduceRight` and renders global components (e.g. Sonner `Toaster`); `react-query.tsx` configures the `QueryClient` (5min staleTime, retry logic, error toasts via QueryCache). Wired in once at `app/layout.tsx` as `<RootProviders>`.
- `config/` — `app.config.ts` (`appConfig`: app name, domain, theme, socials) and `seo.config.ts` (`generateSeoMetadata()` for per-page metadata + `jsonLd` structured data). Layout calls `generateSeoMetadata()`; override per-page by exporting `metadata = generateSeoMetadata({ canonicalUrlRelative: '/...' })`.
- `constants/` — `env.ts` (see below), `api-endpoints.ts`, `enums.ts`, `regex.ts`.
- `utils/` — pure helpers grouped by concern (`cn`, `uuid`, `string/`, `formatting/`, `validation/`).
- `middleware.ts` — Next.js middleware (redirects, matched routes).
- `app/` — App Router. Route groups `(auth)` and `(marketing)`; API routes under `app/api/v1/`.

### Environment variables

Validated with **t3-env + zod** in `src/constants/env.ts` (`server`, `client`, and `extends: [vercel()]`). Client vars must be `NEXT_PUBLIC_`-prefixed. `next.config.ts` imports `env.ts` via **jiti** at build time so invalid env fails the build. Add new vars to both the schema and `runtimeEnv`. Set `SKIP_ENV_VALIDATION=1` to bypass.

### Styling

Tailwind CSS **v4** (CSS-first config — no `tailwind.config.js`). Theme is defined in `src/styles/index.css` via `@theme` using **oklch** colors (e.g. `--color-dark-charcoal`), with `@import` layers from `defaults.css`, `utils.css`, `elements.css`. Use the `cn()` util (`clsx` + `tailwind-merge`) for conditional classes.

### Data flow summary

Component → TanStack Query hook (`src/modules/*/hooks`) → `apiRequest` (`lib/api/client.ts`) → Axios instance (`lib/api/interceptor.ts`). Local/UI state → Zustand store via `createStore`. URL state → `nuqs` (adapter wired in `integrations`).
