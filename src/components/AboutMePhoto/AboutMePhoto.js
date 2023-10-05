import React from "react";
import path from '../../images/aboutme__photo.svg'

function AboutMePhoto() {
    return(
        <img src={ path } className="aboutme__photo" alt="Nikita" />
    );
};

export default AboutMePhoto;