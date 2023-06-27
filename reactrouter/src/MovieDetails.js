import React from 'react';

const MovieDetails = ({ movie }) => {
return (
    <div className="movie-details">
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
    ></iframe>
    </div>
);
};

export default MovieDetails;
