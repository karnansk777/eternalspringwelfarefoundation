# Eternal Spring Welfare Foundation

A full-stack web application for an NGO focused on community development, education, livelihood, women empowerment, health, and social initiatives.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Pages & Routes](#pages--routes)
- [Admin Dashboard](#admin-dashboard)
- [Database Schema](#database-schema)

---

## Project Overview

This is a monorepo containing:

- **`client/`** — Next.js 15 frontend (React 19, App Router)
- **`server/`** — Express.js 5 backend (Node.js, ES Modules)

The application serves two audiences:
1. **Public users** — learn about the foundation, volunteer, donate, and get in touch
2. **Admins** — manage all website content through a CMS dashboard

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.2.1 | React framework (App Router, static export) |
| React | 19.2.4 | UI library |
| Tailwind CSS | 4 | Utility-first styling |
| Bootstrap | 5.3.8 | UI components |
| Bootstrap Icons | 1.13.1 | Icon library |
| Axios | 1.13.6 | HTTP client |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express | 5.2.1 | Web framework |
| MySQL2 | 3.20.0 | Database driver |
| JSON Web Token | 9.0.3 | Authentication |
| bcrypt | 6.0.0 | Password hashing |
| Multer | 2.1.1 | File upload handling |
| Helmet | 8.1.0 | Security headers |
| express-validator | 7.3.1 | Input validation |
| Morgan | 1.10.1 | HTTP request logging |

**Database:** MySQL

---

## Project Structure

```
eternalspringwelfarefoundation/
├── client/                         # Next.js frontend
│   ├── public/
│   │   ├── images/                 # Foundation photos, impact images
│   │   ├── documents/              # Public documents
│   │   └── videos/                 # Hero background video
│   ├── src/
│   │   ├── app/                    # Next.js App Router pages
│   │   │   ├── page.jsx            # Home page
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── donate/
│   │   │   ├── volunteer/
│   │   │   ├── stories/
│   │   │   ├── gallery/
│   │   │   ├── transparency/
│   │   │   ├── 80g-certificate/
│   │   │   └── admin/
│   │   │       ├── login/
│   │   │       └── dashboard/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── home/               # 18 home page section components
│   │   └── lib/
│   │       └── api.js              # Axios base URL config
│   ├── next.config.mjs
│   ├── postcss.config.mjs
│   └── package.json
│
└── server/                         # Express backend
    ├── controllers/                # Route handlers
    ├── models/                     # DB models + connection pool
    ├── routes/                     # API route definitions
    ├── services/                   # Business logic layer
    ├── middleware/
    │   ├── authMiddleware.js       # JWT verification + RBAC
    │   └── upload.js               # Multer disk storage config
    ├── scripts/                    # DB utility scripts
    ├── uploads/                    # Uploaded images (runtime)
    ├── server.js                   # Entry point
    └── package.json
```

---

## Features

### Public Website

- **Home Page** — Hero section with video background, impact metrics, about preview, donation CTA, testimonials, FAQ
- **About** — Mission, values, and approach
- **Programs** — Five core programs:
  - Livelihood & Skill Development
  - Education & Awareness
  - Women Empowerment
  - Health & Hygiene
  - Community Development
- **Projects** — Ongoing and completed project showcase
- **Blog** — Articles and foundation updates
- **Success Stories** — Beneficiary impact stories
- **Gallery** — Photo gallery
- **Volunteer** — Application form (name, phone, email, city, area of interest, availability, message)
- **Contact** — Contact form
- **Donate** — Donation information with Section 80G tax benefit details
- **Transparency** — Financial disclosures
- **80G Certificate** — Tax certificate information

### Admin CMS

- Secure JWT-based login
- Role-based access: `admin` and `co-admin`
- Manage Projects, Programs, Blogs, and Success Stories (full CRUD with image upload)
- View volunteer applications and contact form submissions
- Create/delete co-admin accounts
- Password reset flow (forgot password → reset token → new password)

---

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL server
- npm

### 1. Clone the repository

```bash
git clone <repo-url>
cd eternalspringwelfarefoundation
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=eternal_spring
JWT_ACCESS_SECRET=your_jwt_secret
```

Start the server:

```bash
npm run dev      # Development (nodemon)
npm start        # Production
```

### 3. Set up the frontend

```bash
cd client
npm install
```

Optionally create a `.env.local` file in `client/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev      # Development (http://localhost:3000)
npm run build    # Production build
npm start        # Production server
```

---

## Environment Variables

### Server (`server/.env`)

| Variable | Description | Default |
|---|---|---|
| `PORT` | Express server port | `5000` |
| `DB_HOST` | MySQL host | — |
| `DB_USER` | MySQL username | — |
| `DB_PASSWORD` | MySQL password | — |
| `DB_NAME` | MySQL database name | — |
| `JWT_ACCESS_SECRET` | Secret for signing JWTs | — |

### Client (`client/.env.local`)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000` |

---

## API Reference

All admin write routes require `Authorization: Bearer <token>` header.

### Auth

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/admin/login` | No | Admin login |
| POST | `/api/admin/forgot-password` | No | Request password reset |
| POST | `/api/admin/reset-password` | No | Reset password with token |
| POST | `/api/admin/create-coadmin` | Admin | Create co-admin account |
| GET | `/api/admin/dashboard` | Yes | Dashboard access check |

### Content (Projects, Programs, Blogs, Stories)

Each content type follows the same REST pattern (replace `:resource`):

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/admin/:resource/public` | No | List all (public) |
| GET | `/api/admin/:resource` | Yes | List all (admin) |
| POST | `/api/admin/:resource` | Yes | Create with image upload |
| PUT | `/api/admin/:resource/:id` | Yes | Update |
| DELETE | `/api/admin/:resource/:id` | Yes | Delete |

Resources: `projects`, `programs`, `blogs`, `stories`

### Public Forms

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/volunteers` | No | Submit volunteer application |
| POST | `/api/contact` | No | Submit contact form |

### Admin Data Views

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/admin/volunteers` | Yes | View all volunteer submissions |
| GET | `/api/admin/contacts` | Yes | View all contact submissions |
| GET | `/api/admin/users` | Yes | List admin users |
| DELETE | `/api/admin/users/:id` | Admin | Delete admin user |

### Static Files

Uploaded images are served at: `http://localhost:5000/uploads/<filename>`

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, impact stats, about, programs, projects, stories, blog, testimonials |
| `/about` | Organization mission and values |
| `/projects` | Project showcase |
| `/blog` | Blog listing |
| `/stories` | Success stories |
| `/gallery` | Photo gallery |
| `/contact` | Contact form |
| `/volunteer` | Volunteer application form |
| `/donate` | Donation information and 80G details |
| `/transparency` | Financial transparency |
| `/80g-certificate` | Tax exemption certificate info |
| `/admin/login` | Admin authentication |
| `/admin/dashboard` | Admin CMS (auth-protected) |

---

## Admin Dashboard

Access at `/admin/login` with admin credentials.

### Dashboard Tabs

| Tab | Functionality |
|---|---|
| Dashboard | Overview stats (projects, volunteers, messages, admins) |
| Projects | CRUD — title, description, image upload |
| Programs | CRUD — title, short description, full description, image |
| Blogs | CRUD — title, description, image |
| Stories | CRUD — title, description, image |
| Volunteers | View all volunteer form submissions |
| Contacts | View all contact form submissions |
| Admins | Create co-admins, delete admin users |

### Roles

| Role | Permissions |
|---|---|
| `admin` | Full access including user management |
| `co-admin` | Content management only (no user admin) |

---

## Database Schema

### Tables

**admins** — `id`, `email`, `password` (hashed), `role`, `resetToken`, `resetTokenExpiry`

**projects** — `id`, `title`, `description`, `image_url`, `created_at`

**programs** — `id`, `title`, `short_description`, `full_description`, `image_url`, `created_at`

**blogs** — `id`, `title`, `description`, `image_url`, `created_at`

**success_stories** — `id`, `title`, `description`, `image_url`, `created_at`

**volunteers** — `id`, `name`, `email`, `phone`, `city`, `skills`, `availability`, `message`, `created_at`

**contacts** — `id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`

---

## File Uploads

- Uploaded via `multipart/form-data` POST requests
- Stored in `server/uploads/` directory
- Filename format: `<timestamp>-<random-hash>.<ext>`
- Served as static files at `/uploads/`
- Supported for: projects, programs, blogs, success stories
