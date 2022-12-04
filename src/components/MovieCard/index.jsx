import React from "react";
import "./styles/index.css"
import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function MovieCard({movie,showLink = true}) {

    const imageURL = process.env.REACT_APP_IMG
    const searchURL = process.env.REACT_APP_SEARCH

    console.log(movie)

 return (


    <div className={'movie-card'}>
        <img alt={movie.poster_path} src={imageURL+movie.poster_path}/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>

        {showLink && <Link to={"/movie/"+movie.id}>Detalhes</Link>}
    </div>

 )


}