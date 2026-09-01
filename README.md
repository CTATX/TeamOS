# TeamOS

TeamOS is a web dashboard that surfaces the operating modules a team relies on —
executive comms, product operating model, people leadership, investigation, and
more — in one place.

The app is a [Vite](https://vite.dev) + [React](https://react.dev) +
TypeScript single-page application.

## Prerequisites

- Node.js 22+
- npm 10+

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server on http://localhost:5173
```

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server (HMR).             |
| `npm run build`   | Type-check (`tsc -b`) and build for prod.    |
| `npm run preview` | Preview the production build locally.        |
| `npm run lint`    | Lint the codebase with oxlint.               |

## Cloud Agent environment

This repository ships a Cloud Agent environment at
[`.cursor/environment.json`](.cursor/environment.json). It installs dependencies
with `npm install` and runs `npm run dev` in a persistent terminal so the dev
server is available whenever an agent starts.
