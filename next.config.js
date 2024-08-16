/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/constant/env.ts");

/** @type {import("next").NextConfig} */
const config = {};

export default config;
