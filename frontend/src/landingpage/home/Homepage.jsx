import React from 'react'
import Hero from './Hero';
import Education from './Education';
import Price from './Price';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';


function Homepage() {
    return ( 
        <>
     
        <Hero />
        <Education />
        <Stats />
        <Price />
        <OpenAccount />
       
        </>
     );
}

export default Homepage;