import { useEffect, useState } from "react";

import MovieCard from "./components/MovieCard";

import "./App.css";

const apiKey = "f43e28bf";

const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        console.log(`Searching for ${title}`);
        const response = await fetch(`${API_URL}&s=${title}*`);
        const data = await response.json();

        console.log(data.Search);
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("");
    }, []);

    return (
        <div className="app">
            <h1>Search The Open Movie Database</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {
                        searchMovies(e.target.value);
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <a
                            href={`http://imdb.com/title/${movie.imdbID}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <MovieCard movie={movie} key={movie.imdbID} />
                        </a>
                    ))}
                </div>
            ) : searchTerm.length >= 3 ? (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default App;
