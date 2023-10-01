import React from "react";

function MoviesCard({ duration, nameRU, image }){
    return(
        <div className="movies__card">
            <img src={image} className="movies__card-image" alt={ nameRU } />
            <p className="movies__card-title">{ nameRU }</p>
            <p className="movies__card-dur">{ duration }</p>
        </div>
    );
};

export default MoviesCard;