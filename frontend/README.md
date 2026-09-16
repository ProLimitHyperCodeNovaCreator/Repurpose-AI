# RepurposeAI Frontend

React + Vite frontend for the RepurposeAI platform. It connects to the FastAPI backend and renders the user-facing dashboard, analysis flows, and report views.

## Quick Start

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open the app in the browser at:

- http://localhost:5173

## Environment Variables

Create a `.env` file in `frontend/`:

```bash
cp .env.example .env
```

Example:

```env
VITE_API_URL=http://localhost:8000
```

Optional:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key_here
```

## Development Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
frontend/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.jsx
├── public/
├── .env.example
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── eslint.config.js
```

## API Integration

The frontend calls the backend through the configured `VITE_API_URL` endpoint. The server must be running before the UI can communicate successfully.

## Troubleshooting

### API connection problems

- Check if backend is running on port 8000
- Confirm `VITE_API_URL` is correct
- Check backend CORS configuration

### Environment variable issues

- Restart the dev server after editing `.env`
- Ensure names are prefixed with `VITE_`

### Build issues

- Run `npm install` again if dependencies are missing
- Check `npm run lint` for warnings and errors

## Notes

- The app is built with React 19
- Vite is used for local development and production builds
- The frontend is designed to work with the FastAPI backend in this repo
