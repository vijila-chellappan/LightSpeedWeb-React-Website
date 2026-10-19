# Light Speed Web — React + TypeScript

A maintainable, multi-page front-end for Light Speed Web built with React, TypeScript, Vite, React Router, Framer Motion, and Lucide icons. This project is front-end only; forms are presentation/demo interactions and are not connected to a backend.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Keep code consistently formatted

Prettier is included as a development dependency. Run:

```bash
npm run format
```

To check formatting without changing files:

```bash
npm run format:check
```

## Project structure

```text
src/
  components/   Shared header, footer, reusable sections, card grids and reveal effects
  pages/        One page component per route
  data.ts       Service, industry and portfolio content data
  App.tsx       Route definitions and shared application shell
  main.tsx      React entry point
  styles.css    Design tokens, layout, responsive rules and animation styles
public/         Static assets such as logos and favicons
reference-html/ Original industry HTML references retained for reference only
```

## Safe editing guidelines

- Update page copy and card content in `src/data.ts` when possible, rather than duplicating it inside page components.
- Put reusable UI in `src/components/` and route-specific content in `src/pages/`.
- Keep shared colors, typography, spacing, breakpoints and animation rules in `src/styles.css`.
- Components use TypeScript (`.tsx`) and the project is configured to run `tsc -b` before the Vite production build.
- Use `Reveal` from `src/components/Sections.tsx` for scroll-triggered entrances; it respects reduced-motion preferences through the stylesheet.
- Existing routes and page content have been retained. The reference HTML files are source references, not Vite entry points.

## Brand and contact details

- Email: info@lightspeedweb.ca
- Phone: (647) 500-7155
- Mississauga, Ontario and Coimbatore, Tamil Nadu offices
- Hours: Monday–Friday, 9 AM–5 PM
