// next/image does not prepend basePath to `src`, so public assets need it
// added by hand when the site is served from a sub-path (e.g. GitHub Pages).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
