import { BiCoffeeTogo } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { ImHeadphones, ImBooks } from "react-icons/im";
import { TiCamera } from "react-icons/ti";
import { IoIosBicycle } from "react-icons/io";
import { Popup } from 'semantic-ui-react'

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
                        <br />

                        My adrenaline rush comes from taking up challenges 
                        and solving them efficiently.
                        The ideation phase of a project excites me the most. <br />
                        
                        I have an inclination towards designing, 
                        my taste is minimal, 
                        which I use for the UI of my projects and 
                        posters for various events I am involved with!
                        I also enjoy collaborating and look forward to 
                        fun and productive
                        social engagements on the way. 
                        <br />
                        <br />
                        <br />

                        <i>If you need help with interview preparation, 
                            resume review, 
                            <br />or even discuss collaborations, 
                            <br/>or simply have a virtual coffee over tech chitchat,
                        <br />I'm happy to connect.<br /></i>
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
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                                <BiCoffeeTogo color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={<div>coffee<br />coffee<br />coffee</div>}
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="material-icons">
                                <ImHeadphones color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='all genre tunes'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <TiCamera color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='romanticizing life through my shots'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <IoIosBicycle color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='cycling through streets'
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <ImBooks color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={"reading when i'm bored"}
                        className="popped"
                        position='bottom center'
                    />
                    

                    

                    
                    
                </div>
            </div>

        </div>
        </div>
    )
}

export default About