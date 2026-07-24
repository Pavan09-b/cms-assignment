# Production Ready CMS

A full-stack Content Management System (CMS) built using React, Express.js, PostgreSQL, and JWT Authentication. The project includes an Admin Panel for managing website content and a Public Website that dynamically retrieves published content from the backend.

---

## Features

### Admin Panel
- Admin Login using JWT Authentication
- Secure Logout
- Create Pages
- View All Pages
- Edit Pages
- Delete Pages
- Manage Draft and Published Pages

### Public Website
- Displays only published pages
- Fetches data from backend APIs
- No hardcoded content

---

## Tech Stack

### Frontend
- React.js (Vite)
- React Router
- Axios

### Backend
- Express.js
- PostgreSQL
- JWT Authentication
- bcryptjs

---

## Project Structure

```
cms-assignment/
│
├── backend/
├── admin-frontend/
├── public-frontend/
└── README.md
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <your-github-repository-url>
```

### 2. Backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example`.

Start the backend:

```bash
npm run dev
```

---

### 3. Admin Frontend

```bash
cd admin-frontend
npm install
npm run dev
```

---

### 4. Public Frontend

```bash
cd public-frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```
PORT=5000
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=cms_assignment
JWT_SECRET=your_secret_key
```

---

## Sample Credentials

Username:

```
admin
```

Password:

```
admin123
```

---

## Architecture Overview

The application follows a client-server architecture.

- The Express backend exposes REST APIs.
- PostgreSQL stores page content and administrator data.
- JWT Authentication secures administrator operations.
- The Admin Frontend allows authenticated users to perform CRUD operations.
- The Public Frontend consumes published pages from backend APIs.

---

## Assumptions

- PostgreSQL is installed locally.
- Backend runs on port **5000**.
- Admin and Public frontends run using Vite.
- Only published pages are displayed on the public website.

---

## API Endpoints

### Authentication

```
POST /api/auth/login
```

### Pages

```
GET    /api/pages/public
GET    /api/pages
GET    /api/pages/:id
POST   /api/pages
PUT    /api/pages/:id
DELETE /api/pages/:id
```

---

## Author

Pavan