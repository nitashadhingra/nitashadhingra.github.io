import { BiCoffeeTogo } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { ImHeadphones } from "react-icons/im";
import { TiCamera } from "react-icons/ti";

import "./about.css";
import { useEffect } from "react";
const AOS = require('aos');



const About = () => {

    useEffect(() => {
        AOS.init({
          duration : 1200
        });
      }, []);

    return (
        <div id="about-sec">
        <div>
            <p className="heading sec">About <strong>Me</strong></p>
        </div>
        <div className="col-grid">
            <div className="col">
                <div data-aos="fade-left" data-aos-duration="1500" className="boxed card">
                    <p>
                        <span className="about-intro">
                            A keen learner,<br /> 
                            a universe of atoms, <br />
                            atoms of curiosity.
                        </span>

                        I like taking up challenges and try solving them efficiently.
                        The ideation phase of a project excites me the most. <br />
                        
                        I also have an inclination towards designing, my taste is minimal. 
                        I try using it for the UI of my projects and 
                        posters for various events I am involved with!
                        I also love to manage teams. 
                        <br />
                        <br />
                        <br />

                        <i>If you need guidance in interview preparation, resume review 
                        or simply just have virtual coffee over a tech chitchat or collaborations, 
                        I'm happy to connect.<br /></i>
                        <div className="button" onClick={() => window.open("https://calendly.com/nitashadhingra/30min")}>
                            Schedule a meet
                        </div>
                        
                    </p>
                </div>
            </div>
            
            <div className="col">
                <div data-aos="zoom-in-right" data-aos-duration="1100" className="boxed details card">
                    <p className="bio">She / her</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">21 years old</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1500" className="boxed details card">
                    <p className="bio">Sagittarius</p>
                </div>
            
                <div className="hobbies">
                    <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="900" className="material-icons">
                        <HiCode color="#c7666c" fontSize="25px" />
                    </span>
                    <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                        <BiCoffeeTogo color="#c7666c" fontSize="25px"/>
                    </span>
                    <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="material-icons">
                        <ImHeadphones color="#c7666c" fontSize="25px"/>
                    </span>
                    <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                        <TiCamera color="#c7666c" fontSize="25px"/>
                    </span>
                    
                </div>
            </div>

        </div>
        </div>
    )
}

export default About