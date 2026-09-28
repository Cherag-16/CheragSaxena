# Cherag Saxena — Portfolio

This repository contains a Next.js portfolio website showcasing projects, case studies, system design writeups, and articles.

Quick start

1. Install dependencies

```powershell
npm ci
```

2. Run locally

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm start
```

Notes

- Projects are stored in `data/projects.json` and rendered as case studies under `/portfolio`.
- Blog posts are Markdown files in `data/blog` and rendered under `/blog` (uses `gray-matter` + `marked`).
- System design case studies live under `/system-design`.

CI / Deployment

- There's a GitHub Actions workflow at `.github/workflows/ci.yml` that runs build and tests on pushes to `main`.
- A `Dockerfile` is included for containerized deployment.

Next improvements

- Convert large images to WebP for better performance.
- Add more advanced case studies with CI/CD examples and tests per project.
- Improve blog rendering with rehype plugins and add tags/categories search.
