import React from 'react'
import Hero from  './Hero';
import Signup from './Signup';
import Option from './Option';
import Steps from './Steps';
import Benifit from './Benifit';
import Explore from './Explore';
import Faq from './Faq';
// import OpenAccount from '../OpenAccount.jsx';

function Signuppage() {
    return (
       <> 
        <Hero />
        <Signup />
        <Option />
        <Steps />
        <Benifit />
        <Explore />
        <Faq />
        {/* <OpenAccount /> */}
       </>
      );
}

export default Signuppage;