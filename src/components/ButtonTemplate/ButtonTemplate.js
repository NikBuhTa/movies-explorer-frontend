import React from "react";

function ButtonTemplate({styles, text, onClick = () => {console.log('Worked')}}) {
    return(
        <button onClick={() => onClick()} className={`button ${styles}`}>{text}</button>
    );
};

export default ButtonTemplate;