# Abdullah Jamiu Akorede — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS.

## Structure

- `/` — main site, Full-Stack Software Engineer framing
- `/security` — same profile, cybersecurity-led framing
- `/academic` — academic/research profile (education, dissertation, research experience)
- `/projects` — full project grid
- `/previous-design` — the previous site's visual design, rebuilt in this stack with current content
- `/previous` — frozen static snapshot of the site as it existed before this redesign (archival only, not maintained)

Content lives in `src/data/*.ts` (bio, experience, skills, projects, education). Shared UI is in `src/components`, with page sections in `src/components/sections`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
