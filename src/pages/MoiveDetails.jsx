import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MovieState} from '../movieState'

import styles from '../styles/movie.module.css'

import Award from '../components/Award'

function MoiveDetails() {
    const url = useLocation()
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] =useState(null)

    useEffect(() => {
        const currentMovie = movies.filter((movie) => movie.url === url.pathname)
        setMovie(currentMovie[0])
    }, [movies, url])

  return (
    <>
    {movie && (
        <div className={styles.movie_container}>
            <div className={styles.headline}>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
            </div>
            <div className={styles.awards_container}>
                {movie.awards.map((award) => (
                    <Award title={award.title}
                        description={award.description}
                        key={award.title}/>
                ))}
            </div>
            <div className={styles.secondary_img_container}>
                <img src={movie.secondaryImg} alt={movie.title} />
            </div>
        </div>
    )}
    </>
    
  )
}

export default MoiveDetails
