# RepurposeAI Backend

FastAPI backend for the RepurposeAI application. It hosts the original pharmaceutical analysis workflow and the newer repurpose/search/chat platform features in a single app.

## Overview

This backend provides:

- The legacy `/api/run-agent` analysis pipeline
- LLM-backed research and report generation
- ChromaDB vector search and retrieval
- WebSocket updates for live activity
- Optional MongoDB, Supabase, and auth support
- PDF and export generation workflow

## Quick Start

```bash
cd backend
python -m venv .venv

# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
# .venv\Scripts\Activate.ps1

pip install -r requirements.txt
cp .env.example .env
python main.py
```

The app starts at:

- http://localhost:8000
- Swagger docs: http://localhost:8000/docs

## Environment Variables

Create a `.env` file in `backend/` using the example:

```bash
cp .env.example .env
```

Recommended values:

```env
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

Optional values:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
USE_MONGODB=false
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET_KEY=change-this-value
```

## Main Routes

- `GET /` - root metadata
- `GET /health` - health endpoint from the platform bootstrap layer
- `GET /platform` - platform details
- `POST /api/run-agent` - legacy analysis route
- API docs: `/docs`, `/redoc`

## Project Structure

```text
backend/
├── app/
│   ├── agents/
│   ├── controllers/
│   ├── graph/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── platform_bootstrap.py
│   ├── repurpose_settings.py
│   └── paths.py
├── data/
├── database/
├── templates/
├── .env.example
├── main.py
├── requirements.txt
├── README.md
└── .venv/
```

## Development Notes

- This is a single FastAPI service, not a multi-service architecture
- Startup behavior resets LLM and workflow singletons on reload
- CORS is configured from `FRONTEND_URL` and `FRONTEND_URLS`

## Troubleshooting

### Missing API key

Ensure `GEMINI_API_KEY` is set in `backend/.env`.

### Port conflict

Update `PORT` or stop the process already listening on the port.

### CORS

Make sure the frontend origin matches the allowed CORS list.

## Security

- Do not commit `.env` files
- Keep API keys private
- Use production-secret values in deployment environments
