# Yushan Wei — Personal Homepage

Website: https://silviawei031011.github.io/

Migrated from https://yushan-wei.qrong.chatgpt.site/ while preserving the existing page content, styles, and links to research tools.

## Development

Use Node.js 22.13 or later and npm:

```sh
npm ci
npm run dev
```

Edit `app/page.tsx` for content, `app/globals.css` for styles, and `app/layout.tsx` for page metadata.

## Build and publish

```sh
npm run build
```

The static website is exported to `dist/client/`. GitHub Actions builds and deploys this directory to GitHub Pages on pushes to `main`. The repository Pages source must be **GitHub Actions**.

Only the static client directory is published; no server runtime is required. The `.openai/hosting.json` file records the original Sites project for provenance. This repository's workflow publishes exclusively to GitHub Pages.
