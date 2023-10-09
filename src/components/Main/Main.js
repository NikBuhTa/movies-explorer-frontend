import React, { useEffect, useRef, useState } from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
function Main() {
    const aboutMeRef = useRef(null);
    const aboutProjRef = useRef(null);
    const techsRef = useRef(null);

    return(
        <main className="main">
            <Promo />
            <NavTab />
            <AboutProject ref={aboutProjRef}/>
            <Techs ref={techsRef}/>
            <AboutMe ref={aboutMeRef}/>
        </main>
    );
}

export default Main;