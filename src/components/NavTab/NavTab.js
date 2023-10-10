import React from "react";
import AnchorTemplate from "../AnchorTemplate/AnchorTemplate";

function NavTab({handleScrollAboutProj, handleScrollAboutMe, handleScrollTechs}) {
    return(
        <nav className="menu">
            <ul className="menu__list">
                <AnchorTemplate onClick={handleScrollAboutProj} className='menu__link link-active' text='О проекте' anchor='#aboutProject' />
                <AnchorTemplate onClick={handleScrollTechs} className='menu__link link-active' text='Технологии' anchor='#techs'/>
                <AnchorTemplate onClick={handleScrollAboutMe} className='menu__link link-active' text='Студент' anchor='#aboutMe'/>
            </ul>
        </nav>
    );
}

export default NavTab;