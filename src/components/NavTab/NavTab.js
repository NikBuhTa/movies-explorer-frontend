import React from "react";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function NavTab() {
    return(
        <menu className="menu">
            <SpanTemplate className='menu__link' text='О проекте' />
            <SpanTemplate className='menu__link' text='Технологии' />
            <SpanTemplate className='menu__link' text='Студент' />
        </menu>
    );
}

export default NavTab;