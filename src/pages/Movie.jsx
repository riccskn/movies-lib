import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import "../App.css"
import {useParams} from "react-router-dom";
import MovieCard from "../components/MovieCard";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";

export default function Movie() {

    const moviesURL = process.env.REACT_APP_API
    const apiKey = process.env.REACT_APP_API_KEY

    const [movie,setMovie] = useState(null)
    const { id } = useParams()


    const getMovie = async (id) => {

        const url = moviesURL+id+"?"+apiKey

        const request = await fetch(url)

        const data = await request.json()

        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {

         getMovie(id)

    })

   return (
       <>
       <NavBar/>
           {movie && (
               <div className={"movie-page"}>

                 <MovieCard movie={movie} showLink={false}/>
                   <p className="tagline">{movie.tagline}</p>

                   <div className="info">
                       <h3>
                           <BsWallet2 /> Orçamento:
                       </h3>
                       <p>{formatCurrency(movie.budget)}</p>
                   </div>
                   <div className="info">
                       <h3>
                           <BsGraphUp /> Receita:
                       </h3>
                       <p>{formatCurrency(movie.revenue)}</p>
                   </div>
                   <div className="info">
                       <h3>
                           <BsHourglassSplit /> Duração:
                       </h3>
                       <p>{movie.runtime} minutos</p>
                   </div>
                   <div className="info description">
                       <h3>
                           <BsFillFileEarmarkTextFill /> Descrição:
                       </h3>
                       <p>{movie.overview}</p>
                   </div>

               </div>
           )}
       </>
   )
}