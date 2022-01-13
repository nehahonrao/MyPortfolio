import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";
import "./app.scss";

function App() {
  return (
    <div className="app">
     <Topbar />
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
