import React from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

function MoviesCard({ duration, nameRU, image, type = false }){
    return(
        <div className="movies__card">
            <img src={image} className="movies__card-image" alt={ nameRU } />
            <div className="movies__card-container">
                <h4 className="movies__card-title">{ nameRU }</h4>
                {type ? 
                <ButtonTemplate styles='movies__card-delete' /> :
                <label className="movies__card-label">
                    <input className="movies__card-thumb" type="checkbox" />
                    <span className="movies__card-thumb-icon"></span>
                </label>}
            </div>
            <p className="movies__card-dur">{ duration }</p>
        </div>
    );
};

export default MoviesCard;