/** Resolves paths under `public/` for GitHub Pages (`base: /repo-name/`). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.replace(/^\//, "");
  return `${base}${p}`;
}
