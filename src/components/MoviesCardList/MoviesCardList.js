import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import films from '../../utils/constants.js';

function MoviesCardList(){
    return(
        <ul className="movies__list">
            { films.map((film) => 
                (<MoviesCard key={film.id} duration={film.duration} nameRU={film.nameRU} image={film.image} />)
            ) }
        </ul>
    );
};

export default MoviesCardList;