import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({films, type}){
    return(
        <ul className="movies__list">
            { films.map((film) => 
                (<MoviesCard type={type} key={film.id} duration={film.duration} nameRU={film.nameRU} image={film.image} />)
            ) }
        </ul>
    );
};

export default MoviesCardList;