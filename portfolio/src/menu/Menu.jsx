import React from 'react';
import "./menu.scss";

function Menu({menuOpen,setMenuOpen}) {
  return <>
      <div className={"menu " + (menuOpen && "active")}>
          <ul>
          <li>
        <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
         </li>

            <li>
        <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
            </li>
           
            <li>
        <a href="#project" onClick={()=>setMenuOpen(false)}>Project</a>
            </li>
            <li>
        <a href="#skill" onClick={()=>setMenuOpen(false)}>Skill</a>
            </li>
            <li>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
      </div>
  </>;
}

export default Menu;
