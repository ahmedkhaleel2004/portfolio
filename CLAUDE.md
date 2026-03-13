# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:3000)
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Run ESLint (next lint)
```

## Architecture

This is a personal portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It is a single-page static site with no database or API.

### Data Layer

All portfolio content lives in `/lib/` as typed TypeScript arrays — `projects.ts`, `experience.ts`, `highlights.ts`. Each exports an interface and data array. To update portfolio content, edit these files directly.

### Components (`/app/components/`)

- **ProjectTooltip / ExperienceTooltip** — Client components (`"use client"`) that render mouse-tracking hover tooltips via React portals. These are the main interactive elements.
- **FadeIn** — Reusable staggered fade-in animation wrapper (configurable delay).
- **Highlights** — Featured showcase ΩΩcards with glassmorphism hover effects.

### Styling

- Tailwind utility classes throughout (no CSS modules).
- Custom theme extensions in `tailwind.config.ts`: animations (`slideDown`, `fadeIn`), colors (`body-grey`, `body-light-grey`, `nice-blue`), font family (`--font-roboto-mono`).
- Formatting enforced via Prettier with `prettier-plugin-tailwindcss`.
- Path alias: `@/*` maps to the project root.
