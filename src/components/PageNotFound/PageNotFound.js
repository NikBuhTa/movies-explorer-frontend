import React from "react";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const history = useNavigate();
    const handleClick = () => {
        history(-1);
    }
    return(
        <main className="main">
            <section className="page-notfound">
                <h1 className="page-notfound__title">404</h1>
                <p className="page-notfound__text">Страница не&nbsp;найдена</p>
                <ButtonTemplate type="button" onClick={handleClick} styles='page-notfound__link' text='Назад'/>
            </section>
        </main>
    );
};

export default PageNotFound;