<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Management System - Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .section {
            background: white;
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.8rem;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        h3 {
            color: #764ba2;
            margin: 20px 0 10px 0;
            font-size: 1.3rem;
        }

        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .tech-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }

        .tech-card h3 {
            margin-top: 0;
            font-size: 1.1rem;
        }

        .tech-list {
            list-style: none;
            padding: 0;
        }

        .tech-list li {
            padding: 5px 0;
            color: #555;
        }

        .tech-list li:before {
            content: "▹ ";
            color: #667eea;
            font-weight: bold;
            margin-right: 5px;
        }

        .code-block {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
        }

        .code-block code {
            display: block;
            white-space: pre;
        }

        .comment {
            color: #6a9955;
        }

        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .feature-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .checkmark {
            color: #28a745;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .api-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .api-table th,
        .api-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        .api-table th {
            background: #667eea;
            color: white;
            font-weight: 600;
        }

        .api-table tr:hover {
            background: #f8f9fa;
        }

        .method {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 0.85rem;
        }

        .get { background: #28a745; color: white; }
        .post { background: #007bff; color: white; }
        .put { background: #ffc107; color: black; }
        .delete { background: #dc3545; color: white; }

        .note {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            border-radius: 4px;
            margin: 15px 0;
        }

        .info {
            background: #d1ecf1;
            border-left: 4px solid #0c5460;
            padding: 15px;
            border-radius: 4px;
            margin: 15px 0;
        }

        .badge {
            display: inline-block;
            padding: 4px 10px;
            background: #667eea;
            color: white;
            border-radius: 12px;
            font-size: 0.85rem;
            margin-right: 5px;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            .tech-grid,
            .feature-list {
                grid-template-columns: 1fr;
            }

            .container {
                padding: 10px;
            }

            .section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🚀 Employee Management System</h1>
            <p class="subtitle">Full-stack web application built with FastAPI, React, and SQLAlchemy</p>
        </header>

        <div class="section">
            <h2>📋 Overview</h2>
            <p>A complete employee management system implementing CRUD operations with a modern tech stack. Built as a learning project to understand full-stack development with Python backend and React frontend.</p>
        </div>

        <div class="section">
            <h2>🛠️ Tech Stack</h2>
            <div class="tech-grid">
                <div class="tech-card">
                    <h3>Backend</h3>
                    <ul class="tech-list">
                        <li>FastAPI</li>
                        <li>SQLAlchemy ORM</li>
                        <li>Pydantic</li>
                        <li>Uvicorn</li>
                    </ul>
                </div>
                <div class="tech-card">
                    <h3>Frontend</h3>
                    <ul class="tech-list">
                        <li>React 18</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Axios</li>
                        <li>Vite</li>
                    </ul>
                </div>
                <div class="tech-card">
                    <h3>Database</h3>
                    <ul class="tech-list">
                        <li>SQLite (Development)</li>
                        <li>PostgreSQL (Production)</li>
                        <li>NeonDB Compatible</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>🚀 Quick Start</h2>
            
            <h3>Backend Setup</h3>
            <div class="code-block">
                <code><span class="comment"># Navigate to backend directory</span>
cd backend

<span class="comment"># Create virtual environment</span>
python -m venv venv

<span class="comment"># Activate virtual environment</span>
venv\Scripts\activate          <span class="comment"># Windows</span>
source venv/bin/activate       <span class="comment"># Mac/Linux</span>

<span class="comment"># Install dependencies</span>
pip install -r requirements.txt

<span class="comment"># Run the server</span>
python main.py</code>
            </div>
            <div class="info">
                <strong>ℹ️ Info:</strong> Backend runs at <code>http://localhost:8000</code>
            </div>

            <h3>Frontend Setup</h3>
            <div class="code-block">
                <code><span class="comment"># Navigate to frontend directory</span>
cd frontend

<span class="comment"># Install dependencies</span>
npm install

<span class="comment"># Start development server</span>
npm run dev</code>
            </div>
            <div class="info">
                <strong>ℹ️ Info:</strong> Frontend runs at <code>http://localhost:5173</code>
            </div>
        </div>

        <div class="section">
            <h2>✨ Features</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Complete CRUD operations</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Search employees by name</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Filter by department</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Responsive design</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Real-time data updates</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Form validation</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Error handling</span>
                </div>
                <div class="feature-item">
                    <span class="checkmark">✓</span>
                    <span>Clean UI/UX</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>🔌 API Endpoints</h2>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="method get">GET</span></td>
                        <td><code>/employees</code></td>
                        <td>Get all employees with optional search/filter</td>
                    </tr>
                    <tr>
                        <td><span class="method get">GET</span></td>
                        <td><code>/employees/{id}</code></td>
                        <td>Get single employee by ID</td>
                    </tr>
                    <tr>
                        <td><span class="method post">POST</span></td>
                        <td><code>/employees</code></td>
                        <td>Create new employee</td>
                    </tr>
                    <tr>
                        <td><span class="method put">PUT</span></td>
                        <td><code>/employees/{id}</code></td>
                        <td>Update existing employee</td>
                    </tr>
                    <tr>
                        <td><span class="method delete">DELETE</span></td>
                        <td><code>/employees/{id}</code></td>
                        <td>Delete employee by ID</td>
                    </tr>
                    <tr>
                        <td><span class="method get">GET</span></td>
                        <td><code>/departments</code></td>
                        <td>Get list of all departments</td>
                    </tr>
                    <tr>
                        <td><span class="method get">GET</span></td>
                        <td><code>/stats</code></td>
                        <td>Get employee statistics</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2>💾 Database Configuration</h2>
            <p>By default, the application uses SQLite for local development:</p>
            <div class="code-block">
                <code><span class="comment"># Default SQLite database</span>
DATABASE_URL=sqlite:///./employees.db</code>
            </div>

            <div class="note">
                <strong>⚠️ Note:</strong> The SQLite database file (<code>employees.db</code>) will be created automatically in the backend directory.
            </div>

            <h3>Switching to PostgreSQL/NeonDB</h3>
            <p>To use PostgreSQL in production, update <code>backend/.env</code>:</p>
            <div class="code-block">
                <code><span class="comment"># PostgreSQL/NeonDB configuration</span>
DATABASE_URL=postgresql://username:password@host:port/database</code>
            </div>
        </div>

        <div class="section">
            <h2>📁 Project Structure</h2>
            <div class="code-block">
                <code>employee-management/
├── backend/
│   ├── main.py              <span class="comment"># FastAPI application</span>
│   ├── models.py            <span class="comment"># SQLAlchemy models</span>
│   ├── schemas.py           <span class="comment"># Pydantic schemas</span>
│   ├── database.py          <span class="comment"># Database configuration</span>
│   ├── requirements.txt     <span class="comment"># Python dependencies</span>
│   └── .env                 <span class="comment"># Environment variables</span>
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx          <span class="comment"># Main React component</span>
│   │   ├── components/      <span class="comment"># React components</span>
│   │   └── services/        <span class="comment"># API service layer</span>
│   ├── package.json         <span class="comment"># Node dependencies</span>
│   └── vite.config.ts       <span class="comment"># Vite configuration</span>
│
└── README.md                <span class="comment"># This file</span></code>
            </div>
        </div>

        <div class="section">
            <h2>📝 Assignment Context</h2>
            <p>I built this as a web application because I thought it would be more interesting to build and a better learning experience.</p>
            
            <div class="info">
                <strong>Assignment Requirements Met:</strong>
                <ul class="tech-list" style="margin-top: 10px;">
                    <li>SQLAlchemy ORM integration</li>
                    <li>Complete CRUD operations</li>
                    <li>Database schema with Employee model</li>
                    <li>All specified queries and operations</li>
                </ul>
            </div>
        </div>

        <footer style="text-align: center; padding: 40px 0; color: #666;">
            <p>Built with ❤️ using FastAPI, React, and SQLAlchemy</p>
        </footer>
    </div>
</body>
</html>
