import { useEffect } from "react";
import "../Styles/About.css"
import Aos from "aos";
import "aos/dist/aos.css";


export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (

    <>
      <div className="header-content">
        <h3 className="content"> <span className="Hey">Hey </span>there, I'm <span data-aos="fade-in" duration={2000} className="Jusuf">JUSUF</span>, a Junior frontend developer.
        </h3>
        <p className="p-content" data-aos="fade-out" > I'm excited to keep learning and growing my skills as I tackle new challenges and work with other developers on complex projects. I know that communication, time management, and staying up-to-date with industry trends are key to success in this field, and I'm committed to putting in the hard work to achieve my goals!<span className="also"> also i like art :D</span></p>
      </div>
      <div data-aos="fade-out" class="loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>

        <div class="cell d-1"></div>
        <div class="cell d-2"></div>


        <div class="cell d-2"></div>
        <div class="cell d-3"></div>


        <div class="cell d-3"></div>
        <div class="cell d-4"></div>


      </div>



    </>
  );
};