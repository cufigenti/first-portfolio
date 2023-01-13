import React, { useEffect } from "react";
import art2 from "./art2.jpg";
import art1 from "./art1.jpg"
import art3 from "./art3.jpg"
import Particle from "../Particle";
import Aos from "aos";
import "aos/dist/aos.css";




export const Home = () => {
  useEffect (() => {
    Aos.init({duration: 1000});
  }, []);
  return (

    <>
    <div>
    <Particle />
    
      </div>   
    <div className="hero">
      <h5 className="text">magic</h5>
     
    </div>
    <section>
     <div className="wrapper-bet">
       <div className="in-between">
        
        <p> FOCUS </p>
        
      </div>
     </div>
    </section>

    
    <div className="first-portion">
      <div class="scroll"></div>
    </div>
    <div className="img-wrapper">
      <div className="first-img">
        <img src={art1} width="30%" height="" ></img>
       
      </div>
      <div data-aos="zoom-out-down" className="second-img">
        <img src={art2} width="30%" height="" ></img>
        
      </div>
      <div data-aos="zoom-in-left" className="third-img">
        <img src={art3} width="30%" height="" ></img>
        
      </div>
    </div>

      <div className="ce">
        <h1>b</h1>
      </div>
 
      </>
  );
};