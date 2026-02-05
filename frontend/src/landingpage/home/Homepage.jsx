import React from 'react'
import Hero from './Hero';
import Education from './Education';
import Price from './Price';
import Stats from './Stats';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function Homepage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Education />
        <Stats />
        <Price />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default Homepage;