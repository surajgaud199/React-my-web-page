import React from 'react';
import './style.css';

function ReactJSLists (){
    const IPL = ["CSK","MI", "RCB"]
    const result=IPL.map((ipl)=><h1>{ipl}</h1>)
    return(
        <div className='Container'>
            <div className='style'>
           <h1>{result}</h1>
        </div>
        </div>
    );
}
export default ReactJSLists