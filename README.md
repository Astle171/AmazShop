# AmazShop

A modern MERN ecommerce project with a Vite + React + TypeScript frontend and an Express + MongoDB backend.

## Structure

- `frontend/` – Vite + React + TypeScript UI
- `backend/` – Express API server

## Prerequisites

- Node.js 18+ (recommended 20+)
- MongoDB (local or Atlas)

## Environment Variables

Create a `.env` at the repo root:

```
NODE_ENV=development
PORT=5020
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret
```

## Install

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

## Run (local)

Start both backend and frontend:

```bash
npm run dev
```

Or run separately:

```bash
npm run dev --prefix backend
npm run dev --prefix frontend
```

## Frontend

- Runs at: `http://localhost:3000`
- Vite proxy forwards `/api` to `http://127.0.0.1:5020`

## Backend

- Runs at: `http://127.0.0.1:5020`
- API base: `/api`

## Deployment Notes

- **Frontend (Vercel)**: set root directory to `frontend` and build output `dist`
- **Backend (Render/Railway/Fly)**: set root directory to `backend` and start command `npm start`

## Scripts (root)

- `npm run dev` – run backend + frontend
- `npm run server` – backend dev only
- `npm run client` – frontend dev only
