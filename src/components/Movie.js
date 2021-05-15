import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const votecolour = (vote) => {
    if(vote>8){
        return 'green';
    } else if(vote>5){
        return 'orange';
    } else 
        return 'red';
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className='movie'>
        <img src={poster_path ? (IMG_API + poster_path) : 
            "https://image.freepik.com/free-vector/movie-clapper-board-vector-illustration-video-icon-film-making-industry_28461-2.jpg"} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className = {`tag ${votecolour(vote_average)}`}>{vote_average}</span>
        </div>

        <div className='movie-overview'>
            <h3> Overview </h3>
            {overview}
        </div>

    </div>
);

export default Movie