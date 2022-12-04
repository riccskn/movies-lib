import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import {useSearchParams} from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function Search() {

    const searchURL = process.env.REACT_APP_SEARCH
    const apiKey = process.env.REACT_APP_API_KEY

    const [searchParam] = useSearchParams()

    const [movies,setMovies] = useState([])
    const query = searchParam.get("q")

    const getSearchMovies = async (url) => {

        const res = await fetch(url)

        const data = await res.json()

        setMovies(data.results)
    }


    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        getSearchMovies(searchWithQueryURL)
    },[query])

    return (
        <div className={"container"}>
            <NavBar/>
            <h2 className={"title"}>Resultados para <span className={"query-text"}>{query}</span></h2>

            <div className={"movies-container"}>
                {movies.map(movie => <MovieCard movie={movie}/>)}
            </div>


        </div>
    )
}