const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
}

export function getPosterUrl(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : "";
}

export function getBackdropUrl(path) {
  return path ? `https://image.tmdb.org/t/p/original${path}` : "";
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

