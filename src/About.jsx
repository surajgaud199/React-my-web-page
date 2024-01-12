import React from 'react';
// import Headar from './Headar';

function About (){
    return(
    <>
    {/* <Headar/> */}
    <h1>About page</h1>
    <div className='container'>
    <div className='pic'>
    <img src={require('./image/image 3.avif')} alt=''/>
    </div>
    </div>
    </>
    );
}
export default About