import React from 'react';
import { useState } from 'react';
import AboutMe from '../common/components/AboutMe';
import '../common/css/Home.css';


function Home() {
    const first_name = 'haris';
    const last_name = 'Duratovic';

    const getName = () => {
        return first_name + ' ' + last_name;
    };

    const headerName = () => {
        return <div className="Header-name-container">
                    <div className="Header-first-name">{first_name}</div>
                    <div className="Header-last-name">{last_name}</div>
                </div>;
    }

    
    return (
        <div>
            <div id="Header">
                <div className="Home-header">
                    <h2>
                        {headerName()}
                    </h2>
                </div>
                
                <div className="Home-header-bottom">
                    <AboutMe />
                </div>
            </div>
            <div>
                <AboutMe />
            </div>
        </div>
    );
};

export default Home;

