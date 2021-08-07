import React from 'react'
import  PropTypes  from 'prop-types';
// components
import Thumb from '../Thumb'
import Rate from '../Rate'
//config
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config'
// Image
import NoImage from '../../images/no_image.jpg'
//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles'


const MovieInfo = ({movie}) => {
    return (
        <Wrapper backdrop={movie.backdrop_path} >
            <Content>
                <Thumb
                image={
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable={false}
                 />
                 <Text>
                     <h1>{movie.title}</h1>
                     <h3>PLOT</h3>
                     <p>{movie.overview}</p>

                     <div className='rating-directors'>
                         <div>
                             <h3>RATING</h3>
                             <div className='score'>{movie.vote_average}</div>
                         </div>
                         <div className='director'>
                             <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                             {movie.directors.map(director => (
                                 <p key={director.credit_id}>{director.name}</p>
                             ))}
                         </div>
                     </div>
                     <div>
                         <p>Rate Movie</p>
                         <Rate />
                     </div>
                 </Text>
            </Content>
        </Wrapper>
            
        
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo
