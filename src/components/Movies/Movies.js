import React, { useContext, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import MoviesPage from "../MoviesPage/MoviesPage";
import WebPage from "../WebPage/WebPage";
import Footer from "../Footer/Footer";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import SideBar from "../SideBar/SideBar";
import filmsRender from "../../utils/filmsRender";
import { MobileSizeContext } from "../../contexts/MobileSizeContext";

function Movies({onSubmit, films, setFilms, onAddBtnClick}){
    const {isMobSize, isTabSize} = useContext(MobileSizeContext);

    useEffect(() => {
        if (localStorage.getItem('data')) {
            setFilms(filmsRender(JSON.parse(localStorage.getItem('data')).films, isMobSize, isTabSize));
        }
    }, [])

    return(
        <WebPage content={
            <>
                <HeaderAuthFilms />
                <main className="main">
                    <SideBar />
                    <MoviesPage children={
                        <>
                            <MoviesCardList films={films} type={false}/>
                            {films.length === JSON.parse(localStorage.getItem('data')).films.length ? '' :
                                <ButtonTemplate onClick={onAddBtnClick} isDisabled={false} styles='movies__button' text='Ещё' />
                            }
                        </>
                    }
                    onSubmit={(keyWord, short) => onSubmit(keyWord, short)}
                    />
                </main>
                <Footer />
            </>
        }/>
    );
};

export default Movies;