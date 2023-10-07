import React from "react";

function ButtonTemplate({type = 'button', styles = '', text, onClick = () => {console.log('Worked')}}) {
    return(
        <button type={type} onClick={() => onClick()} className={`button ${styles}`}>{text}</button>
    );
};

export default ButtonTemplate;