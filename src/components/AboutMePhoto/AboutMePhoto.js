import React from "react";
import path from '../../images/aboutme.png'

function AboutMePhoto() {
    return(
        <img src={ path } className="aboutme__photo" alt="Студент" />
    );
};

export default AboutMePhoto;