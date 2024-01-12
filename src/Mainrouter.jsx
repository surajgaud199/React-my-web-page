import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Headar from './com-component/Headar';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Product from './Product';
import Maltipalcard from './Maltipalcard';



const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <> <Headar/></>
    },
    {
        path : "/home",
        element : <> <Headar/><Home/></>
    },
    {
        path : "/about",
        element : <> <Headar/><About/></>
    },
    {
        path : "/contect",
        element : <> <Headar/><Contect/></>
    },
    {
        path : "/product",
        element : <> <Headar/><Product/></>
    },
    {
        path : "/maltipalcard",
        element : <> <Headar/><Maltipalcard/></>
    }

]);
export default Mainrouter