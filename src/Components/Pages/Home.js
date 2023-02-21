import React, { useEffect } from "react";
import art2 from "./art2.jpg";
import art1 from "./art1.jpg"
import art3 from "./art3.jpg"
import galleryA from "./galleryA.jpg"
import galleryB from "./galleryB.jpg"
import galleryC from "./galleryC.jpg"
import galleryD from "./galleryD.jpg"
import galleryE from "./galleryE.jpg"
import galleryF from "./galleryF.jpg"
import galleryG from "./galleryG.jpg"
import galleryH from "./galleryH.jpg"
import galleryJ from "./galleryJ.jpg"
import Particle from "../Particle";
import Aos from "aos";
import "aos/dist/aos.css";




export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);
  return (

    <>
       
      <div>
        <Particle />
      </div>

      <div className="hero">
        <h5 className="text-hero">magic</h5>

      </div>
      

   

      <section>
        <div className="wrapper-bet">
          <div className="in-between">

            <p className="focus"> FOCUS </p>

          </div>
        </div>
      </section>


      <div className="first-portion">
        <div class="scroll"> </div>
          <h4 className="focus">fo·​cus ˈfō-kəs</h4>
          <p>-a state or condition permitting clear perception or understanding
            tried to bring the issues into focus
            -adjustment for distinct vision
            also : the area that may be seen distinctly or resolved into a clear image</p>
       
      </div>
     
      <div className="img-wrapper">
        <div className="first-img">
          <img src={art1} width="30%" height="" ></img>          
        </div>
    <div data-aos="fade-right"  className="first-text">
        <p className="p-one"> it is a straightforward concept </p>
    </div>
        <div data-aos="zoom-out-down" className="second-img">
          <img src={art2} width="30%" height="" ></img>
    </div>
      <div data-aos="fade-left"  className="second-text">
        <p className="p-two"> without it ... </p>
      </div>
      
        <div data-aos="zoom-in-left" className="third-img">
          <img src={art3} width="30%" height="" ></img>        
        </div>
      <div data-aos="fade-bottom"  className="third-text">
        <b><p className="p-three"> | we are nothing | </p></b>
      </div>
      </div>

    <div className="grid-wrapper">
        <div className="art-gallery">
                <figure data-aos="fade-in" class="gallery__item gallery__item--1">
                    <img src={galleryA} alt="Gallery image 1" class="gallery__img"></img>
                </figure>
                <figure data-aos="zoom-out-top"  class="gallery__item gallery__item--2">
                    <img src={galleryB} alt="Gallery image 2" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--3">
                    <img src={galleryC} alt="Gallery image 3" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--4">
                    <img src={galleryD} alt="Gallery image 4" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--5">
                    <img src={galleryE} alt="Gallery image 5" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--6">
                    <img src={galleryF} alt="Gallery image 6" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--7">
                    <img src={galleryG} alt="Gallery image 7" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--8">
                    <img src={galleryJ} alt="Gallery image 8" class="gallery__img"></img>
                </figure>
                <figure  data-aos="zoom-out-top" class="gallery__item gallery__item--9">
                    <img src={galleryH} alt="Gallery image 9" class="gallery__img"></img>
                </figure>
        </div>
    </div>
   
    </>
  );
};