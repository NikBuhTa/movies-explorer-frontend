import React from "react";

function Navigation({ children }) {
    return(
        <nav className="nav">
            {children}
        </nav>
    );
}

export default Navigation;