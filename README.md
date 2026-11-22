# Yushan Wei — Personal Homepage

The current page uses the approved November 2026 profile copy, with About,
Research Interests, Research, Research Tools, and Education. The portrait area
is intentionally empty until a photograph is selected. CV downloads are the
approved English and Chinese Overleaf PDFs in `public/cv/`.

Research thumbnails reproduce the overview figures from the PATHOS and LitArc-Bench
manuscripts and the first page of the published 2023 article. Tool SVGs are
conceptual workflow diagrams, not experimental data plots. University emblem images are sourced from the official identity pages:

- SISU: https://news.shisu.edu.cn/about/identity-guidelines/index.html
- Shandong University: https://culture.sdu.edu.cn/info/1011/1001.htm

No visitor tracking or public visitor counter is enabled.

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
