import React from 'react';
import { useState } from 'react';
import Counter from '../common/components/Counter';
import AboutMe from '../common/components/AboutMe';
import '../common/css/Home.css';


function Home() {
    const first_name = 'Haris';
    const last_name = 'Duratovic';

    const getName = () => {
        return first_name + ' ' + last_name;
    };

    
    return (
        <div>
            <div className="Home-header">
                <h1>
                    {getName()}
                </h1>
                <AboutMe />
            </div>
            <Counter />
        </div>
    );
};

export default Home;

