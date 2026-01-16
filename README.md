# 🎬 CineSky Next (Frontend)

**CineSky Next** is a MERN-based movie web application and the successor to my earlier small project **CineSky**.  
This repository contains the **frontend** part of the project.

---

## ✨ Features

- 🔍 Search for movies
- 📈 Browse trending / popular movies
- 🎞️ View movie details (overview, rating, cast, reviews)
- 👤 User authentication (signup/login)
- ❤️ Save favorite movies (synced to database)
- 📱 Responsive UI (mobile + desktop)
- ⚡ Fast and interactive React frontend

---

## 🛠️ Tech Stack

- React.js + Vite
- React Router
- Tailwind CSS
- TMDB API
- Backend API (JWT auth, MongoDB)

---

## 📦 Setup

### 1) Clone & install
```bash
git clone https://github.com/ImNotPranav/cinesky.git
cd cinesky-frontend
npm install
```

### 2) Create `.env` file
```env
VITE_TMDB_TOKEN="your-tmdb-bearer-token"
VITE_API_URL="http://localhost:4000"
```

### 3) Run
```bash
npm run dev
```

App runs on `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── api/          # API functions (auth, favorites, movies)
├── components/   # Navbar, MovieCard, SearchBar, Reviews
├── contexts/     # AuthContext, FavoritesContext, SearchContext
├── pages/        # Home, Login, MovieDetails, CastDetails, Favorites
└── main.jsx      # App entry point
```

