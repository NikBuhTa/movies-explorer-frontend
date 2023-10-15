import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";

function MoviesPage({children, onSubmit}){
    return(
        <section className="movies">
            <SearchForm onSubmit={(keyWord, short) => onSubmit(keyWord, short)}/>
            {children}
        </section>
    );
};

export default MoviesPage;