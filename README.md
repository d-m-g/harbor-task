# harbor-task

Redesign of Wheely (automotive subscription landing).

## GitHub Pages (deploy from branch)

The production build is published to the **`gh-pages`** branch. GitHub Pages serves that branch as the site.

**URL:** [https://d-m-g.github.io/harbor-task/](https://d-m-g.github.io/harbor-task/)

### One-time GitHub settings

1. **Settings → Pages → Build and deployment**
2. **Source:** **Deploy from a branch**
3. **Branch:** `gh-pages`, folder **`/ (root)`**, Save

### Publish (each time you want to update the live site)

```bash
npm ci
npm run deploy
```

That runs `vite build` (with base path `/harbor-task/`) and pushes **`dist/`** to the **`gh-pages`** branch. After the push, the site updates in about a minute.

Requires git remote `origin` pointing at this GitHub repo and permission to push.

### Local preview (production build)

```bash
npm run build
npx vite preview --base /harbor-task/
```

### Changing the repo name

If the repository is renamed, update `repoBase` in `vite.config.ts` to `/<new-repo-name>/` so assets load correctly on Pages.
