# Newton Electrical - Web Management System

**Information Technology Project (ITP)** · Year 2 · Semester 2

A full-stack web application for **Newton Electrical**, a home-comfort services business offering cooling, heating, electrical, security, and plumbing. The system connects customers and administrators through a public website and an admin dashboard for day-to-day operations.

## Live Demo

[![Live UI](https://img.shields.io/badge/Live_UI-Open_Demo-2563eb?style=for-the-badge)](https://itp-project-newton-electrical.vercel.app)

| Service | URL |
|---------|-----|
| **Web application (UI)** | [itp-project-newton-electrical.vercel.app](https://itp-project-newton-electrical.vercel.app) |

---

## Features

### Customer portal
- Browse home page, services, and service **packages**
- View **ongoing** and **previous** projects
- Book and manage **appointments**
- Browse the **store** (product inventory)
- Submit and manage **feedback**
- Apply for **careers** (job listings and CV upload)
- Register, log in (email/password or **Google** via Firebase), and manage **profile**

### Admin dashboard (`/admin`)
- **User management** - view, update, delete users; analytics (daily/weekly/monthly sign-ups, gender and location charts)
- **Project management** - add, update, and delete projects
- **Product / inventory** - manage store items
- **Package management** - create and maintain service packages
- **Appointments** - approve or cancel customer bookings
- **Jobs & CVs** - post jobs, review applications, track completed jobs
- **Feedback** - moderate customer reviews
- **Reports** - export user data to PDF

---

## Tech stack

| Layer | Technologies |
|-------|----------------|
| Frontend | React 18, Vite, React Router, Tailwind CSS, Material UI, Axios, Recharts, Firebase Auth, React Toastify |
| Backend | Node.js, Express, Mongoose, MongoDB, JWT (HTTP-only cookies), Nodemailer, Multer |
| Deployment | Vercel (frontend + serverless API) |

---

## Project structure

```
ITP_Project__NewtonElectrical/
├── backend/
│   ├── controllers/     # Business logic (auth, users, projects, jobs, etc.)
│   ├── middleware/      # JWT cookies, token verification
│   ├── models/          # Mongoose schemas
│   ├── routes/          # REST API route definitions
│   ├── index.js         # Express app entry point
│   └── vercel.json      # Vercel serverless config
├── frontend/
│   ├── src/
│   │   ├── Admin/       # Admin dashboard pages & components
│   │   ├── components/  # Shared UI (header, footer, charts, etc.)
│   │   ├── context/     # React context (user session)
│   │   ├── pages/       # Public pages (home, store, login, …)
│   │   └── router/      # Route configuration
│   └── index.html
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)
- MongoDB database ([MongoDB Atlas](https://www.mongodb.com/atlas) works well for development)
- Firebase project (for Google sign-in) — optional for local testing without OAuth

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/G-Gimsara/ITP_Project__NewtonElectrical.git
cd ITP_Project__NewtonElectrical
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGO_DB=mongodb+srv://<user>:<password>@<cluster>/<database>?retryWrites=true&w=majority
TOKEN_KEY=your_jwt_secret_key_here
NODE_ENV=development
```

Start the API server (runs on port **3000**):

```bash
npm start
```

### 3. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_FIREBASE_API_KEY=your_firebase_web_api_key
```

Start the development server:

```bash
npm run dev
```

The Vite dev server typically runs at `http://localhost:5173`.

### 4. Local API connection

The frontend is configured to call the **deployed** API by default (`https://itp-project-newton-api.vercel.app`). To use your local backend instead:

1. Point Axios calls to `http://localhost:3000`, or introduce a `VITE_API_URL` environment variable and use it consistently.
2. In `backend/index.js`, add your local frontend origin to the CORS `origin` array (e.g. `http://localhost:5173`) alongside the Vercel URL.

---

## API overview

Base URL (production): `https://itp-project-newton-api.vercel.app`

| Prefix | Purpose |
|--------|---------|
| `/auth` | Register, login, logout, Google register, forgot/reset password |
| `/user` | User CRUD and registration analytics |
| `/project` | Project CRUD |
| `/package` | Service package CRUD |
| `/shedule` | Appointments (create, list, approve, cancel, update) |
| `/product` | Store / inventory products |
| `/jobs` | Job postings |
| `/cv` | CV uploads and application status |
| `/feedbacks` | Customer feedback |
| `/service` | Services |
| `/completedjobs` | Completed job counter |

---

## User roles

| Role | Description |
|------|-------------|
| `Customer` | Default role — bookings, store, feedback, careers |
| `Admin` | Access to `/admin` dashboard and management features |

---

## Scripts reference

### Backend (`backend/`)

| Command | Description |
|---------|-------------|
| `npm start` | Start Express server on port 3000 |

### Frontend (`frontend/`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Academic context

This repository was developed as part of the **Year 2, Semester 2 Information Technology Project (ITP)** coursework. It demonstrates:

- Full-stack MERN-style architecture (MongoDB, Express, React, Node.js)
- RESTful API design and JWT-based session handling
- Role-based access (customer vs admin)
- Deployment to a cloud platform (Vercel)
- Integration of third-party services (Firebase Authentication, email)

---

## License

MIT License

---

