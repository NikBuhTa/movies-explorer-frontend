import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SpanTemplate from '../SpanTemplate/SpanTemplate';

function MoviesCardList({styles = '', films, type, handleLikeBtn, handleDeleteBtn}){
    return(
        <>
            {films.length !== 0 ? 
            <ul className={`movies-list ${styles}`}>
                { films.map((film, index) => 
                    (<MoviesCard link={film.trailerLink} handleDeleteBtn={() => {handleDeleteBtn(film)}} handleLikeBtn={() => handleLikeBtn(film)} type={type} checked={film.checked} key={index} duration={film.duration} nameRU={film.nameRU} image={type? film.image: film.image.url} />)
                ) }
            </ul> :
            <SpanTemplate className='movies-list__notfound' content='Ничего не найдено!'/>  }
        </>
    );
};

export default MoviesCardList;