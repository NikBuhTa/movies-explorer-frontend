import React  from "react";

function AnchorTemplate({ className, text, anchor }){
    return(
        <li className="menu__item"><a href={anchor} className={className} >{text}</a></li>
    );
};

export default AnchorTemplate;