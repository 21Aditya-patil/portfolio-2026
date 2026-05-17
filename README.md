# Portfolio 2026

A futuristic full-stack developer portfolio built with React, Tailwind CSS, Supabase, and Framer Motion.

This portfolio is designed with a modern cyber-tech aesthetic and includes dynamic content management, authentication, responsive UI, premium animations, and interactive tech-feed experiences.

---

## 🚀 Tech Stack

- React.js
- Vite
- Tailwind CSS
- Supabase
- Framer Motion
- React Router DOM
- React Icons

---

## ✨ Features

### 🔥 Dynamic Feed System
- Add tech reviews/posts from admin dashboard
- Interactive modal UI
- Score-based highlighting
- Responsive feed cards
- Image support

### 💼 Projects Section
- Dynamic project uploads
- GitHub & live links
- Tech stack support
- Image uploads with Supabase Storage

### 🛠 Admin Dashboard
- Secure authentication
- Add/Delete projects
- Add/Delete feed posts
- Upload images directly to Supabase Storage

### 📱 Responsive Design
Optimized for:
- Mobile
- Tablets
- Laptops
- Large screens

### 🎨 UI/UX
- Cyber-tech inspired interface
- Glassmorphism
- Smooth animations
- Modern typography
- Dynamic hover effects

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-2026.git
```

Go into the project:

```bash
cd portfolio-2026/client
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# 🗄 Supabase Setup

## Database Tables

### projects

| column | type |
|---|---|
| id | int8 |
| created_at | timestamptz |
| title | text |
| description | text |
| github | text |
| live | text |
| tech | text |
| image | text |

---

### tech_picks

| column | type |
|---|---|
| id | int8 |
| created_at | timestamptz |
| title | text |
| review | text |
| quote | text |
| source | text |
| score | float8 |
| url | text |
| featured | bool |
| image | text |

---

# 🖼 Storage Setup

Create bucket:

```txt
portfolio-images
```

Enable:
- Public bucket

Policies:
- Public image access
- Authenticated uploads

---

# 🏗 Build For Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🌍 Deployment

Recommended stack:

- Frontend → Vercel
- Backend → Supabase

---

# 👨‍💻 Author

## Aditya Patil

Fullstack Developer passionate about:
- AI
- Web Engineering
- Product Design
- Consumer Technology
- Startup Building

