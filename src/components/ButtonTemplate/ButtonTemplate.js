import React from "react";

function ButtonTemplate({isDisabled = true, type = 'button', styles = '', text, onClick = () => {console.log('Worked')}}) {
    return(
        <>
            {isDisabled
                ? <button disabled type={type} onClick={onClick} className={`button ${styles} button_unactive`}>{text}</button>
                : <button type={type} onClick={onClick} className={`button ${styles}`}>{text}</button>
            }
        </>
    );
};

export default ButtonTemplate;