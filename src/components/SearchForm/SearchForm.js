import React from "react";
import path from '../../images/search.svg'

function SearchForm(){
    return(
        <div className="search">
            <label className="search__input">
                <input className="search__input-item" type="text" required placeholder="Фильм" /> {/*animation*/}
                <button className="search__button"><img src={ path } alt='search'/></button>
            </label>
            <div className="search__choice">
                <label className="search__thumb-label">
                    <input className="search__thumb" type="checkbox" />
                    <span className="search__thumb-icon"></span>
                </label>
                <p className="search__short-text">Короткометражки</p>
            </div>
        </div>
    );
};

export default SearchForm;