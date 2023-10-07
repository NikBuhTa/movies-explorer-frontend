import React, { useEffect } from "react";
import MoviesPage from "../MoviesPage/MoviesPage";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedFilms } from "../../utils/constants";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import Footer from "../Footer/Footer";
import WebPage from "../WebPage/WebPage";
import SideBar from "../SideBar/SideBar";

function SavedMovies({handleMoveToSavedMovies, isSavedMovies}){

    return(
        <WebPage content={
            <>
                <SideBar />
                <HeaderAuthFilms isSavedMovies={isSavedMovies} />
                <MoviesPage children={
                    <>
                        <MoviesCardList films={savedFilms} type={true}/>
                    </>
                }/>
                <Footer />
            </>
        } />
    );
};

export default SavedMovies;