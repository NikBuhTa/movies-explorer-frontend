import React from "react";

function Navigation({ children, styles }) {
    return(
        <nav className={`${styles} nav`}>
            {children}
        </nav>
    );
}

export default Navigation;