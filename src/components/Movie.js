import React from 'react'
import { useParams } from 'react-router-dom';
// config
import { IMAGE_BASE_URL, POSTER_SIZE} from '../config'
// components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner'
// hook
import { useMovieFetch} from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
    const { movieId } = useParams();

    const {state: movie, loading, error} = useMovieFetch(movieId)

    if (loading) return <Spinner />
    if (error) return <div>Somthing went wrong...</div>

    return (
        <>
        <BreadCrumb movieTitle={movie.original_title} />
        </>
    )
}
        

export default Movie