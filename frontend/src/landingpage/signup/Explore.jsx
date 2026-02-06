import React from 'react'

function Explore() {
    return ( 
        <div className='container-fluid text-center p-5'>
             <h4>Explore different account types</h4>
            <div className='row m-5 text-center'>
               <div className='col m-3 p-5'style={{border:"1px solid rgb(228, 228, 228", borderRadius:"0.5em"}} >
                <h5>Individual Account</h5>
                <p>Invest in Equity,Mutual fund and Derivatives.</p>
               </div>

               <div className='col m-3 p-5'style={{border:"1px solid rgb(228, 228, 228", borderRadius:"0.5em"}} >
                <h5>HUF Account</h5>
                <p>Invest in Equity,Mutual fund and Derivatives.</p>
               </div>

               <div className='col m-3 p-5'style={{border:"1px solid rgb(228, 228, 228", borderRadius:"0.5em"}} >
                <h5>NRI Account</h5>
                <p>Invest in Equity,Mutual fund and Derivatives.</p>
               </div>
             
            </div>

            <div className='row m-5 text-center'>
              <div className='col m-3 p-5'style={{border:"1px solid rgb(228, 228, 228", borderRadius:"0.5em"}} >
                <h5>Minor Account</h5>
                <p>Invest in Equity,Mutual fund and Derivatives.</p>
               </div>

               <div className='col m-3 p-5'style={{border:"1px solid rgb(228, 228, 228", borderRadius:"0.5em"}} >
                <h5>LLP /Partnership</h5>
                <p>Invest in Equity,Mutual fund and Derivatives.</p>
               </div>

               <div className='col m-3 p-5' >
                
               </div>
            </div>
        </div>
     );
}

export default Explore;