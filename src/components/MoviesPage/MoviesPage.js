import React from "react";
import SearchForm from "../SearchForm/SearchForm";

function MoviesPage({children, onSubmit, type}){
    return(
        <section className="movies">
            <SearchForm type={type} onSubmit={(keyWord, short) => onSubmit(keyWord, short)}/>
            {children}
        </section>
    );
};

export default MoviesPage;