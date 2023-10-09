import React from "react";
import path from '../../images/search.svg'

function SearchForm(){
    return(
        <form className="search">
            <div className="search__container">
                <label className="search__input">
                    <input className="search__input-item" type="text" required placeholder="Фильм" />
                </label>
                <button className="search__button"><img src={ path } alt='search'/></button>
            </div>
            <div className="search__choice">
                <label className="search__thumb-label">
                    <input className="search__thumb" type="checkbox" />
                    <span className="search__thumb-icon"></span>
                </label>
                <p className="search__short-text">Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;