# Domain glossary

Names for the seams in this template. Architecture vocabulary (module, interface, depth, seam, leverage, locality) lives
in `.claude/skills/codebase-design`.

## Concepts

- **Product** — a catalogue item (`id`, `name`, `price`, `quantity`). The shape is owned by one schema, `productSchema`
  in `src/modules/products/types.ts`, and both the query hooks and the local API route validate against it.

- **Products module** (`src/modules/products`) — owns **server-cache state** for the catalogue. Its interface is the
  hooks (`useProducts`, `useProduct`, `useCreateProduct`, `useUpdateProduct`, `useDeleteProduct`) plus the contract
  types. `api/` (raw request functions + query-key factory) is an internal seam, not exported from the barrel — callers
  go through the hooks so they can't bypass the query cache.

- **Cart module** (`src/modules/cart`) — owns **client-only state**: the items a user has gathered. Interface:
  `useCart`, `useCartState`, `useCartActions`. Depends on the products module for the `Product` type. Lives apart from
  products so the two state systems never collide on a name (the old `useProducts` clash).

## Module pattern

A feature module is a self-contained slice under `src/modules/<feature>/`. Its public interface is the barrel
(`index.ts`), which exports **hooks + types only**. Raw API functions, query keys, and store internals stay behind that
seam.

Cross-cutting layers stay generic: `src/lib/store` holds the `createStore` factory, not concrete stores; concrete stores
belong to the module that owns the state.
