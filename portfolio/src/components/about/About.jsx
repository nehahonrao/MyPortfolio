import './about.scss';
import { init } from 'ityped';
import { useEffect,useRef } from 'react';


export default function About() {
 const textref = useRef();
    useEffect(()=>{
        init(textref.current, 
        {showCursor: true, 
            backDelay:  1500,
        strings: ['FrontEnd Web Developer','UI Designer'],
     });
    },[])
    return (
        <div className='about' id="about">
            <div className="left">
             <div className="imgcontainer">
                 <img src="image/neha.jpg" alt="" />
             </div>
            </div>
            <div className="right">
            <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Neha Mayur Honrao</h1>
          <h3 className="heading">.<span ref={textref}></span></h3>
          
        </div>
        </div>
        </div>
    )
}
