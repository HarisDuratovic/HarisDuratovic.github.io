import React from 'react';
import { useState } from 'react';


function Counter() {

    const [count, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(count+1);
    };


    return (
        <div>
            <button onClick={() => increment()}>bollocks {count}</button>
        </div>
    );

}


export default Counter;