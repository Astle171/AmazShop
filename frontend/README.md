# AmazShop Frontend (Vite + React + TypeScript)

This frontend uses Vite for fast dev builds and React + TypeScript for the UI.

## Prerequisites

- Node.js 18+ (recommended 20+)
- Backend running on `http://127.0.0.1:5020` (proxy configured in `vite.config.ts`)

## Scripts

From `frontend/`:

- `npm run dev` – start the dev server
- `npm run build` – build for production
- `npm run preview` – preview the production build locally

From repo root:

- `npm run dev` – starts backend and frontend concurrently

## Dev Server

- Frontend runs on `http://localhost:3000`
- API requests to `/api/*` are proxied to `http://127.0.0.1:5020`

## Configuration

- Vite config: `frontend/vite.config.ts`
- App entry: `frontend/index.html`
- TypeScript config: `frontend/tsconfig.json`

## Notes

If you change dependencies, reinstall:

```
npm install --prefix frontend
```
