import React from "react";

function SpanTemplate({ className, text }) {
    return(
      <span className={ `${className} link-active` }>{ text }</span>
    );
}

export default SpanTemplate;