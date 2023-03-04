import About from './About';
import Clients from './Clients';
import Home from './Home';
import OurProducts from './OurProducts';
import Services from './Services';
import Location from "./Location"
import { useEffect } from 'react';

const Landingpage=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <>
        <Home />
        <About />
        <OurProducts />
        <Services />
        <Clients />
        <Location />
        </>
    )
}

export default Landingpage;