import React, { useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import {films} from '../../utils/constants.js';
import MoviesPage from "../MoviesPage/MoviesPage";
import WebPage from "../WebPage/WebPage";
import Footer from "../Footer/Footer";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";

function Movies({handleMoveToMovies, isMovies}){
    useEffect(() => handleMoveToMovies, []);

    return(
        <WebPage content={
            <>
                <HeaderAuthFilms isMovies={isMovies}/>
                <MoviesPage children={
                    <>
                        <MoviesCardList films={films} type={false}/>
                        <ButtonTemplate styles='movies__button' text='Ещё' />
                    </>
                }/>
                <Footer />
            </>
        }/>
    );
};

export default Movies;