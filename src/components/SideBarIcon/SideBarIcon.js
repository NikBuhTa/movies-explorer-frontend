import React, { useContext } from "react";
import { SideBarContext } from "../../contexts/SideBarContext";

function SideBarIcon({styles}) {
    const {isSideBar, toggleSideBar} = useContext(SideBarContext);
    
    return(
        <div onClick={toggleSideBar} className='header__sidebar-icon'>
            <span className={`${ styles } header__sidebar-span`}></span>
            <span className={`${ styles } header__sidebar-span`}></span>
            <span className={`${ styles } header__sidebar-span`}></span>
        </div>
    );    
};

export default SideBarIcon;