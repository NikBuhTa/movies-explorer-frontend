import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SpanTemplate from '../SpanTemplate/SpanTemplate';

function MoviesCardList({films, type}){
    return(
        <>
            {films ? 
            <ul className="movies-list">
                { films.map((film) => 
                    (<MoviesCard type={type} key={film.id} duration={film.duration} nameRU={film.nameRU} image={film.image} />)
                ) }
            </ul> :
            <SpanTemplate className='movies-list__notfound' content='Фильмов не найдено!'/>  }
        </>
    );
};

export default MoviesCardList;