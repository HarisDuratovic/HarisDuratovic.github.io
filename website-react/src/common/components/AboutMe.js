import React from 'react';
import { useState } from 'react';
import './AboutMe.css';


function AboutMe() {

    const [toggled, setToggled] = useState(false);

    const toggle_delay = 50;
    const anim_delay = 200;

    const mountedStyle = {
        animation: "inAnimation " + anim_delay + "ms ease-in"
    };
    const unmountedStyle = {
        animation: "outAnimation " + anim_delay + "ms ease-out",
        animationFillMode: "forwards"
    };


    const toggle = (toggleOn) => {
        
        setTimeout(() => {
            setToggled(toggleOn);
          }, toggle_delay);
        // can simplify, but keep for now, maybe some fancy stuff ya know
    };

    function AboutMeToggle() {
        
        if (toggled) {
            return <span style={toggled ? mountedStyle : unmountedStyle} className='About-transition About-text' onAnimationEnd={() => {}}>
                <GitHub/> - <LinkedIn/> - <ArtStation/>
            </span>
        } else {
            return <span style={!toggled ? mountedStyle : unmountedStyle} className='About-transition About-text'>
                contact details
            </span>

        }
    }

    function GitHub() {
        return <a href="https://github.com/HarisDuratovic" target="_blank">GitHub</a>
    }

    function LinkedIn() {
        return <a href="https://www.linkedin.com/in/haris-duratovic-165a88162/" target="_blank">LinkedIn</a>
    }

    function ArtStation() {
        return <a href="https://www.artstation.com/h_duratovic" target="_blank">ArtStation</a>
    }

    return (
        <div className='About-me'>
            <div className='About-me-toggle' onMouseLeave={() => toggle(false)} onMouseOver={() => toggle(true)}>
                <AboutMeToggle />
            </div>
        </div>
    );

}


export default AboutMe;