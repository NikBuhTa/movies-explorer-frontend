import React, { useEffect, useState } from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

function MoviesCard({ duration, nameRU, image, type = false, checked, handleLikeBtn, handleDeleteBtn, link }){
    const [isLiked, setIsLiked] = useState(false);

    const onClick = () => {
        handleDeleteBtn();
    }

    const onChange= () => {
        setIsLiked(!checked);
        handleLikeBtn();
    }

    useEffect(() => {
        setIsLiked(checked)
    }, [checked])

    return(
        <li className="movies__card">
            <a href={link} className="movies__card-link"><img src={image} className="movies__card-image" alt={ nameRU } /></a>
            <div className="movies__card-container">
                <h2 className="movies__card-title">{ nameRU }</h2>
                {type ? 
                <ButtonTemplate isDisabled={false} type="button" onClick={onClick} styles='movies__card-delete link-active' /> :
                <label className="movies__card-label link-active">
                    <input className="movies__card-thumb" onChange={onChange} checked={isLiked} type="checkbox" />
                    <span className="movies__card-thumb-icon"></span>
                </label>}
            </div>
            <p className="movies__card-dur">{ duration }</p>
        </li>
    );
};

export default MoviesCard;