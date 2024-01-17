import React from 'react';
// import Headar from './Headar';
import Card from './Card'
import ReactJSLists from './ReactJS Lists';


function Home (){
    return(
    <>
    {/* <Headar/> */}
     <div className='container'>
     <h1>Home Page</h1>
     <Card/>
     {/* <img src={image} alt='' /> */}
     <div>
     <img src={require('./image/Image 1.webp')} alt=''/>
     </div>
     <ReactJSLists/>
     </div>
     
   
    </>
    );
}
export default Home