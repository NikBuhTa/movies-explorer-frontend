import React from "react";

function TechsListItem({ technology }) {
    return(
        <li className="techs__list-item">
            { technology }
        </li>
    );
};

export default TechsListItem;