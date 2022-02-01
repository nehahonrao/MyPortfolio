import React, { Component }  from 'react';
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";
import "./app.scss";
import { useState } from 'react';
import Menu from './menu/Menu';

function App() {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Home />
       <About />
       <Project />
       <Skill />
       <Contact />
     </div>
    </div>
  );
}

export default App;
