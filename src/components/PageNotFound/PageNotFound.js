import React from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const history = useNavigate();
    const handleClick = () => {
        history(-1);
    }
    return(
        <section className="page-notfound">
            <h2 className="page-notfound__title">404</h2>
            <p className="page-notfound__text">Страница не&nbsp;найдена</p>
            <ButtonTemplate onClick={handleClick} styles='page-notfound__link' text='Назад'/>
        </section>
    );
};

export default PageNotFound;