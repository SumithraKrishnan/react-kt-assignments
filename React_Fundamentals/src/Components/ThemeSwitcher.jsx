import React, { useState } from 'react';
import "./Theme.css";

function ThemeSwitcher(props) {
    const [themeswitch,setThemeswitch]=useState(true)
    return (
        <div style={{border:"blue solid 2px"}} className={themeswitch?"whiteTheme":"darkTheme"}>
            <p>Theme Switcher</p>
            <button onClick={()=>setThemeswitch(!themeswitch)}>{themeswitch?"Dark mode":"Light mode"}</button>
        </div>
    );
}

export default ThemeSwitcher;