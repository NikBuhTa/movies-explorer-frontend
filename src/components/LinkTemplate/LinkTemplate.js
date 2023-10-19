import React from "react";
import { Link } from "react-router-dom";

function LinkTemplate({path, styles, linkText, spanText}) {
    return(
        <>
            {spanText}<Link to={path} className={`${styles} link-active`}>{linkText}</Link>    
        </>
    );
};

export default LinkTemplate;