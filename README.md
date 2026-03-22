# harbor-task

Redesign of Wheely (automotive subscription landing).

## GitHub Pages

The site is built with **Vite** and deployed from the **`main`** branch via GitHub Actions.

**Live URL (after setup):** [https://d-m-g.github.io/harbor-task/](https://d-m-g.github.io/harbor-task/)

### One-time setup

1. Push this repo to GitHub (if it is not already there).
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
4. Push to `main` (or merge a PR). The workflow **Deploy to GitHub Pages** builds and publishes `dist/`.
5. Wait for the run to finish; the site URL appears in the workflow summary and under **Pages**.

### Local preview (production build)

```bash
npm ci
npm run build
npx vite preview --base /harbor-task/
```

Then open the URL Vite prints (paths match GitHub Pages).

### Changing the repo name

If the repository is renamed, update `repoBase` in `vite.config.ts` to `/<new-repo-name>/` so assets load correctly on Pages.
