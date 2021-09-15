import React from 'react';
import { useState } from 'react';


function AboutMe() {

    const [toggled, setToggled] = useState(false);

    const toggle = () => {
        setToggled(!toggled);
        console.log('toggled', toggled);
    };

    function AboutMeToggle() {
        
        if (toggled) {
            return <span>GitHub - LinkedIn - ArtStation</span>
        } else {
            return <span></span>

        }
        //onMouseOut={() => toggle()} onMouseOver={() => toggle()}
    }

    return (
        <div className=''>
            <button onClick={() => toggle()}>Programmer Cringe</button>
            <div>
                <AboutMeToggle />
            </div>
        </div>
    );

}


export default AboutMe;