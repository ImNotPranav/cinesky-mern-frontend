import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState(() => {
        const saved = localStorage.getItem('favoriteMovies');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const addFavorite = (movie) => {
        setFavoriteMovies(prev => [...prev, movie]);
    };

    const removeFavorite = (movieId) => {
        setFavoriteMovies(prev => prev.filter(m => m.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favoriteMovies.some(m => m.id === movieId);
    };

    return (
        <FavoritesContext.Provider value={{ favoriteMovies, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
