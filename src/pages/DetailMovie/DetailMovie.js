import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom'
import axios from 'axios';
function DetailMovie() {
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState([])
    const [trailer, setTrailer] = useState([])

    const API_KEY = process.env.REACT_APP_API_KEY_MOVIE;
    const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    const getSingleMovie = async () => {
        try {
            const { data } = await axios(`${VIDEO_BASE_URL}`)
            setSingleMovie(data)
        } catch (error) {
            console.log("error:", error);
        }
    }

    const VIDEO_BASE_URL_TRAILER = `https://api.themoviedb.org/3/movie/${id}videos?api_key=${API_KEY}`;

    const getTrailer = async () => {
        try {
            const { data } = await axios(`${VIDEO_BASE_URL_TRAILER}`)
            console.log(data);
            setTrailer(data)
        } catch (error) {
            console.log("error:", error);
        }
    }

    useEffect(() => {
        getSingleMovie()
        getTrailer()
        return () => { };
    }, [])

    return (
        <div className='d-flex m-5 gap-5'>
            <div style={{width:"40%"}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original${singleMovie?.poster_path}`}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path
                                }`}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='d-flex flex-column gap-4 pt-5' style={{width:"80ch"}}>
                <h3>{singleMovie?.title}</h3>
                <h4>{singleMovie?.overview}</h4>
            </div>
        </div>
    )
}

export default DetailMovie