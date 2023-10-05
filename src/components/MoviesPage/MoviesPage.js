import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";

function MoviesPage({children}){
    return(
        <section className="movies">
            <SearchForm />
            {children}
        </section>
    );
};

export default MoviesPage;