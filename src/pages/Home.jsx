import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import "../App.css"
import MovieCard from "../components/MovieCard";



export default function Home() {

    const moviesURL = process.env.REACT_APP_API
    const apiKey = process.env.REACT_APP_API_KEY

    const [topMovies,setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

         const res = await fetch(url)

         const data = await res.json()

        setTopMovies(data.results)
    }

   useEffect(() => {

        const topRated = `${moviesURL}top_rated?${apiKey}`

           getTopRatedMovies(topRated)
    },[])

    return (
        <div className={'container'}>
          <NavBar/>
            <h2 className="title">Melhores filmes:</h2>

            <div className={'movies-container'}>
            {topMovies && topMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

        </div>
    )


}