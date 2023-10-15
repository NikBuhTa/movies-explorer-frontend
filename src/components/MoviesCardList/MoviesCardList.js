import React, { useContext, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SpanTemplate from '../SpanTemplate/SpanTemplate';
import { url } from "../../utils/constants";
import { MobileSizeContext } from "../../contexts/MobileSizeContext";

function MoviesCardList({styles = '', films, type}){
    const {isTabSize, isMobSize} = useContext(MobileSizeContext);
    return(
        <>
            {films.length !== 0 ? 
            <ul className={`movies-list ${styles}`}>
                { films.map((film, index) => 
                    (<MoviesCard type={type} key={index} duration={film.duration} nameRU={film.nameRU} image={`${url}${film.image.url}`} />)
                ) }
            </ul> :
            <SpanTemplate className='movies-list__notfound' content='Фильмов не найдено!'/>  }
        </>
    );
};

export default MoviesCardList;