import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SpanTemplate from '../SpanTemplate/SpanTemplate';

function MoviesCardList({styles = '', films, type}){
    return(
        <>
            {films ? 
            <ul className={`movies-list ${styles}`}>
                { films.map((film) => 
                    (<MoviesCard type={type} key={film.id} duration={film.duration} nameRU={film.nameRU} image={film.image} />)
                ) }
            </ul> :
            <SpanTemplate className='movies-list__notfound' content='Фильмов не найдено!'/>  }
        </>
    );
};

export default MoviesCardList;