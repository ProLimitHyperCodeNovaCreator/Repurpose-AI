# RepurposeAI

A pharmaceutical research and drug repurposing platform with a FastAPI backend and a React frontend. The app combines legacy agent-based analysis workflows with a more advanced repurpose/search/chat pipeline powered by LLMs, vector search, and report generation.

## Video

https://drive.google.com/file/d/1Xm_jLXXHV3IJCCvUA35PVe857PgI0Nxw/view?usp=sharing

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Notes](#notes)

## Overview

This repository contains two main parts:

1. Backend: a single FastAPI application that hosts the classic analysis API and the newer repurpose/search/chat capabilities.
2. Frontend: a Vite + React app that provides the user interface for interacting with the backend.

Key capabilities include:

- Drug and market analysis workflows
- LLM-powered research and summarization
- Vector search / RAG with ChromaDB
- PDF export and report generation
- Optional MongoDB, Supabase, and auth layers
- WebSocket-based live updates

## Architecture

```text
┌──────────────────────┐
│ Frontend (React)     │  http://localhost:5173
│ Vite + React         │
└──────────┬───────────┘
           │ HTTP / WebSocket
           ▼
┌──────────────────────┐
│ Backend (FastAPI)    │  http://localhost:8000
│ Unified app          │
│ - /api/run-agent     │
│ - /health, /platform │
│ - repurpose routes   │
│ - WebSocket updates  │
│ - LLM + vector store │
└──────────────────────┘
```

The backend is intentionally a single app. It includes:

- Classic agent workflow under `backend/app/agents/` and routes in `backend/app/routes/agent_routes.py`
- Extended repurpose/search/chat exports under `backend/app/routes/repurpose/`
- LangGraph orchestration in `backend/app/graph/`
- LLM providers such as Gemini, Groq, and Ollama
- Optional database integrations and authentication

## Prerequisites

Before you start, ensure you have:

- Python 3.10+ recommended
- Node.js 18+ and npm
- A Google Gemini API key for the default LLM flow

## Quick Start

### 1) Clone the repository

```bash
git clone <repository-url>
cd RepurposeAI
```

### 2) Backend setup

```bash
cd backend
python -m venv .venv

# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
# .venv\Scripts\Activate.ps1

# Windows CMD
# .venv\Scripts\activate.bat

pip install -r requirements.txt
cp .env.example .env
python main.py
```

The backend runs on:

- http://localhost:8000
- API docs: http://localhost:8000/docs

### 3) Frontend setup

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend runs on:

- http://localhost:5173

### 4) Open the app

Visit:

```text
http://localhost:5173
```

## Environment Configuration

### Backend

Copy the example file and update the values:

```bash
cd backend
cp .env.example .env
```

Example:

```env
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

Required / commonly used values:

- `GEMINI_API_KEY`: required for the default Gemini-based flows
- `GEMINI_MODEL`: optional override for the Google model
- `FRONTEND_URL`: used for CORS and local frontend access
- `GROQ_API_KEY`: optional fallback provider

Optional integrations:

- `SUPABASE_URL`, `SUPABASE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `MONGODB_URI`, `USE_MONGODB=true`
- `JWT_SECRET_KEY`, etc. for auth

### Frontend

```bash
cd frontend
cp .env.example .env
```

Example:

```env
VITE_API_URL=http://localhost:8000
```

Important:

- Vite env vars must start with `VITE_`
- Restart the Vite dev server after changing environment variables

## Project Structure

```text
RepurposeAI/
├── backend/
│   ├── app/
│   │   ├── agents/
│   │   ├── controllers/
│   │   ├── graph/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── platform_bootstrap.py
│   │   ├── repurpose_settings.py
│   │   └── paths.py
│   ├── data/
│   │   ├── cache/
│   │   ├── conversations/
│   │   ├── internal_docs/
│   │   ├── reports/
│   │   └── vector_db/
│   ├── database/
│   │   └── supabase/
│   ├── templates/
│   ├── .env.example
│   ├── main.py
│   ├── README.md
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
│   └── index.html
├── README.md
├── SETUP.md
├── LICENSE
└── .git/
```

## API Documentation

Once the backend is running:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

Main endpoints:

- `POST /api/run-agent`
- `GET /health`
- `GET /platform`
- Extended repurpose routes such as search, chat, export, and knowledge endpoints under `/api`

Example request:

```json
{
  "query": "Analyze market potential for a drug repurposing opportunity",
  "complexity": 5
}
```

## Troubleshooting

### Backend issues

#### `GEMINI_API_KEY not found`

- Ensure `backend/.env` exists and includes a valid key
- Restart the backend after updating the environment file

#### `Port already in use`

- Change the port in `backend/.env` or stop the process that is already using it

#### CORS errors

- Check that `FRONTEND_URL` or `FRONTEND_URLS` matches the frontend URL
- Ensure the frontend is running on the expected origin

### Frontend issues

#### `Cannot connect to API`

- Confirm the backend is running
- Check `VITE_API_URL` in `frontend/.env`
- Verify the backend port and URL match the frontend config

#### Environment variables not loaded

- Restart the Vite dev server
- Make sure the variable names are prefixed with `VITE_`

### Dependency issues

- Backend: run `pip install --upgrade pip` and then `pip install -r requirements.txt`
- Frontend: remove `node_modules` and reinstall with `npm install`

## Notes

- The project uses a single FastAPI backend rather than multiple service apps
- Local cache is file-based; Redis is not used in this repository
- ChromaDB is used for vector/RAG functionality
- Some integrations such as MongoDB, Supabase, and auth are optional and environment-dependent
- Reports can be exported as PDFs and other structured outputs

## License

This project currently does not include a custom license block in the repository. If you plan to distribute it publicly, add the appropriate license file and update this section.

## Related docs

- [backend/README.md](backend/README.md)
- [frontend/README.md](frontend/README.md)
- [SETUP.md](SETUP.md)
