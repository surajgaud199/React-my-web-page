import React from 'react';


function Product (){
    return(
    <>
    <h1>Product page</h1>
    <div className='container'>
        <div className='pic'>
            <img src={require('./image/image 5.avif')} alt=''/>
        </div>
    </div>
    </>
    );
}
export default Product