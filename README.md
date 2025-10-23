# Employee Management System - Python Assignment

A complete employee management system built with FastAPI, React, and SQLAlchemy.

## Tech Stack

**Backend:**
- FastAPI
- SQLAlchemy ORM

**Frontend:**
- React + Typescript
- Tailwind CSS
- Axios

## Quick Start

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
python main.py
```

Backend runs at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## Features

- ✅ Complete CRUD operations
- ✅ Search employees by name
- ✅ Filter by department
- ✅ Responsive design
- ✅ Real-time updates

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| GET | `/employees/{id}` | Get single employee |
| POST | `/employees` | Create employee |
| PUT | `/employees/{id}` | Update employee |
| DELETE | `/employees/{id}` | Delete employee |
| GET | `/departments` | Get all departments |
| GET | `/stats` | Get statistics |

## Database

By default uses SQLite (`employees.db`).

```bash
DATABASE_URL=sqlite:///./employees.db
```

