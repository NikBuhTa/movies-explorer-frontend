import React, { useEffect} from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import MoviesPage from "../MoviesPage/MoviesPage";
import WebPage from "../WebPage/WebPage";
import Footer from "../Footer/Footer";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";

function Movies({onSubmit, films, onAddBtnClick, handleLikeBtn, handleLoadMovies, isLoading}){

    useEffect(() => {
        if (localStorage.getItem('data')) {
            handleLoadMovies();
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
                            {isLoading
                            ? <Loader />
                            :   <>
                                    <MoviesCardList handleLikeBtn={(film) => handleLikeBtn(film)} films={films} type={false}/>
                                    {JSON.parse(localStorage.getItem('data')) ? 
                                        films.length === JSON.parse(localStorage.getItem('data')).films.length ? '' :
                                        <ButtonTemplate onClick={onAddBtnClick} isDisabled={false} styles='movies__button' text='Ещё' /> : ''
                                    }
                                </>
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