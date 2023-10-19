import React from "react";
import TechsListItem from "../TechsListItem/TechsListItem";

function TechsList() {
    return(
        <ul className="techs__list">
            <TechsListItem technology='HTML' />
            <TechsListItem technology='CSS' />
            <TechsListItem technology='JS' />
            <TechsListItem technology='React' />
            <TechsListItem technology='Git' />
            <TechsListItem technology='Express.js' />
            <TechsListItem technology='MongoDB' />
        </ul>
    );
};

export default TechsList;