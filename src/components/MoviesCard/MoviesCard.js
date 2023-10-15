import React, { useState } from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

function MoviesCard({ duration, nameRU, image, type = false }){
    const [checked, isChecked] = useState(false);

    const onChange= () => {
        isChecked(!checked);
    }

    return(
        <li className="movies__card">
            <img src={image} className="movies__card-image" alt={ nameRU } />
            <div className="movies__card-container">
                <h2 className="movies__card-title">{ nameRU }</h2>
                {type ? 
                <ButtonTemplate type="button" styles='movies__card-delete link-active' /> :
                <label className="movies__card-label link-active">
                    <input className="movies__card-thumb" onChange={onChange} checked={checked} type="checkbox" />
                    <span className="movies__card-thumb-icon"></span>
                </label>}
            </div>
            <p className="movies__card-dur">{ duration }</p>
        </li>
    );
};

export default MoviesCard;