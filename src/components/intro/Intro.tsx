import pfp from "../../img/me.png";
import './intro.css';

import { useEffect } from "react";
const AOS = require('aos');

const Intro = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <div className="intro">
            <div className="circle">
                <span className="circle__btn">
                    <img src={pfp} alt="Nits" />
                </span>
                <span className="circle__back-1"></span>
                <span className="circle__back-2"></span>
            </div>
            <div className="text">
                <p id="name">Nitasha <strong>Dhingra</strong></p>
                <p className="title">Software Engineer</p>

                <p>Your local fun nerd ♡ <br /> A logical and creative thinker, I love solving problems. <br />   
                    Web and flutter developer.</p>
                
                <div className="socials">
                    <hr></hr>
                    
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <a href="https://github.com/nitashadhingra" title="Github">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M12 16.5v-2.902a2.53 2.53 0 00-.705-1.958c2.355-.263 4.83-1.155 4.83-5.25A4.08 4.08 0 0015 3.578 3.803 3.803 0 0014.932.75S14.047.487 12 1.86a10.035 10.035 0 00-5.25 0C4.702.487 3.817.75 3.817.75a3.803 3.803 0 00-.067 2.827 4.08 4.08 0 00-1.125 2.835c0 4.065 2.475 4.958 4.83 5.25a2.528 2.528 0 00-.705 1.935V16.5m0-2.25C3 15.375 3 12.375 1.5 12l5.25 2.25z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1300">
                        <a href="https://www.linkedin.com/in/nitashadhingra/" title="Linkedin">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 14.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 8 12 8s5 2.358 5 6.5z"></path>
                                <path d="M12 6a4.5 4.5 0 014.5 4.5v5.25h-3V10.5a1.5 1.5 0 10-3 0v5.25h-3V10.5A4.5 4.5 0 0112 6v0zM4.5 6.75h-3v9h3v-9zM3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                        </div>
                    <div data-aos="zoom-in" data-aos-duration="1600">
                        <a href="https://twitter.com/nitassium" title="Twitter">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M17.25 2.25a8.174 8.174 0 01-2.355 1.147A3.36 3.36 0 009 5.647v.75A7.995 7.995 0 012.25 3s-3 6.75 3.75 9.75a8.73 8.73 0 01-5.25 1.5c6.75 3.75 15 0 15-8.625 0-.209-.02-.417-.06-.622a5.79 5.79 0 001.56-2.753v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1900">
                        <a href="mailto:nitashadhingra612@gmail.com" title="Email">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.5 4.5L9 9.75 1.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                    {/* <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </div>
                    <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </div> */}
                    <hr></hr>
                </div>
            </div>  
            
        </div>
    )
}

export default Intro