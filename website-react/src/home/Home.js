import React from 'react';
import { useState } from 'react';
import AboutMe from '../common/components/AboutMe';
import '../common/css/Home.css';
import homeBg from '../assets/home-bg.png';
import blueTextImage from '../assets/blue-name-clipping-mask.png';
import ImageText from '../common/components/ImageText';


function Home() {
    const first_name = 'haris';
    const last_name = 'Duratovic';



    const getName = () => {
        return first_name + ' ' + last_name;
    };

    const headerName = () => {
        return <div className="Header-name-container">
                    <div className="Header-first-name">{first_name}</div>
                    <ImageText className="Header-last-name" image={blueTextImage}>
                    {last_name}</ImageText>
                </div>;
    }


    
    return (
        <div>
                    
            <div id="Header"
            style={{ 
                backgroundImage: homeBg
              }}>
                <div className="Home-header">
                    <h2>
                        {headerName()}
                    </h2>
                </div>
                
                <div className="Home-header-bottom">
                    <AboutMe />
                </div>
                <img 
                style={{height: "80vh", width:"100%", resizeMode: "stretch", objectFit: "fill"}}
                src={homeBg}
                alt="Canvas Logo"
                />
            </div>
        </div>
    );
};

export default Home;

