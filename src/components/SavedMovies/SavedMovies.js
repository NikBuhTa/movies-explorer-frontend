import React, { useEffect } from "react";
import MoviesPage from "../MoviesPage/MoviesPage";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import Footer from "../Footer/Footer";
import WebPage from "../WebPage/WebPage";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";

function SavedMovies({handleLoadSavedMovies, films, handleDeleteBtn, handleSearchSavedMoviesBtnSubmit, isLoading}){

    useEffect(() => {
        handleLoadSavedMovies();
    }, [])

    return(
        <WebPage content={
            <>
                <HeaderAuthFilms />
                <main className="main">
                    <SideBar />
                    <MoviesPage  type={true} children={
                        <>
                            {isLoading
                            ? <Loader />
                            : <MoviesCardList handleDeleteBtn={(film) => handleDeleteBtn(film)} films={films} type={true} styles="movies-list_position_savedmovies"/>}
                        </>
                    } 
                    onSubmit={(keyWord, short) => handleSearchSavedMoviesBtnSubmit(keyWord, short)}
                    />
                </main>
                <Footer />
            </>
        } />
    );
};

export default SavedMovies;