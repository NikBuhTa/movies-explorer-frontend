import React from "react";

function ArticleInfo({ title, text }) {
    return(
        <div className="about-project__description">
            <h3 className="about-project__description_title">{ title }</h3>
            <p className="about-project__description_text">{ text }</p>
        </div>
    );
}

export default ArticleInfo;