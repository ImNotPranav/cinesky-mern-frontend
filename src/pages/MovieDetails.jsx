import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { getMovieDetails } from '../api/getMovies'
import { getBackdropUrl } from '../api/getMovies'
import Navbar from '../components/Navbar'
import { useFavorites } from '../contexts/FavoritesContext'
import { useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { addFavorite, removeFavorite, isFavorite } = useFavorites()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [toast, setToast] = useState({ show: false, message: '', type: '' })

    const isLiked = isFavorite(Number(id))

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movie = await getMovieDetails(id)
                setMovie(movie)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchMovieDetails()
    }, [id])

    const showToast = (message, type) => {
        setToast({ show: true, message, type })
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 2500)
    }

    const changeLikedState = () => {
        if (isLiked) {
            removeFavorite(movie.id)
            showToast('Removed from Favorites', 'removed')
        } else {
            addFavorite(movie)
            showToast('Added to Favorites', 'added')
        }
    }

    if (loading) {
        return (
            <div className="bg-[#1A1A1A] flex justify-center items-center h-screen">
                <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-black animate-spin" />
            </div>
        )
    }
    if (error) {
        return (
            <div className="bg-[#1A1A1A] flex justify-center items-center h-screen">
                <div className="text-white">Error: {error.message}</div>
            </div>
        )
    }
    return (
        <div className='bg-[#1A1A1A] min-h-screen'>
            <Navbar />

            {/* Toast Notification */}
            <div
                className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${toast.show
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className={`px-5 py-3 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2 ${toast.type === 'added'
                        ? 'bg-pink-500/90 text-white'
                        : 'bg-gray-700/90 text-gray-100'
                    }`}>
                    {toast.type === 'added' ? (
                        <FaHeart className="text-white" />
                    ) : (
                        <FiHeart className="text-gray-100" />
                    )}
                    <span className="font-medium text-sm">{toast.message}</span>
                </div>
            </div>

            <div className="relative w-full h-[50vh] rounded-bl-xl rounded-br-xl overflow-hidden shadow-lg">
                <IoArrowBack
                    className="absolute top-4 left-4 z-20 text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors"
                    onClick={() => navigate(-1)}
                />
                {isLiked ? (
                    <FaHeart className="absolute top-4 right-4 z-20 text-2xl text-pink-500 cursor-pointer" onClick={changeLikedState} />
                ) : (
                    <FiHeart className="absolute top-4 right-4 z-20 text-2xl text-white cursor-pointer" onClick={changeLikedState} />
                )}
                <img
                    src={getBackdropUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="opacity-30 h-[50vh] w-full object-cover"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* title */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2">
                    <h2 className="text-3xl font-inter text-[#ededed] font-semibold">
                        {movie.title}
                    </h2>
                    {movie.adult && (
                        <span className="bg-red-600/80 text-white text-xs font-bold px-2 py-1 rounded">
                            A
                        </span>
                    )}
                </div>
            </div>
            <p className='m-4 text-white'>{movie.overview}</p>
        </div>
    )
}

export default MovieDetails