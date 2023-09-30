import React from "react";
import AboutMeText from "../AboutMeText/AboutMeText";
import AboutMePhoto from "../AboutMePhoto/AboutMePhoto";

function AboutMeInfo(){
    return(
        <div className="aboutme__container">
            <AboutMeText />
            <AboutMePhoto />
        </div>
    );
};

export default AboutMeInfo;