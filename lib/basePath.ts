// Kept in sync with next.config.ts. next/image with `unoptimized: true` renders
// a plain <img src>, which does NOT get Next's automatic basePath prefixing —
// so static asset paths must be prefixed manually for GitHub Pages project sites.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
