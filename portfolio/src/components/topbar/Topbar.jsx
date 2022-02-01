import './topbar.scss';
import React from 'react';
import {Person,Mail} from "@material-ui/icons";

export default function Topbar({menuOpen,setMenuOpen}) {
return (
<div className={'topbar ' + (menuOpen && "active")} id="topbar">
    <div className="wrapper">
        <div className="left">
            <a href="#about" className='logo'>Neha Mayur Honrao</a>
            <div className="itemContainer">
                <Person className="icon"/>
                <span>+32 465684998</span>
            </div>
            <div className="itemContainer">
                <Mail className="icon" />
                <span>nehalonkar27@gmail.com</span>
            </div>
        </div>
        
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line'></span>
                <span className='line1'></span>
                <span className='line2'></span>
            </div>
        </div>
    </div>
</div>
)
}