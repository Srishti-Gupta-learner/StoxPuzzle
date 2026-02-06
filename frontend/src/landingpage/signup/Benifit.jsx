import React from 'react'
function Benifit() {
    return ( 
        <div className='container-fluid'>
            <div className='row p-5 text-center'>
                  
                <div className='col'>
                    <img src='media/console.png' alt='benifit' style={{width:"20rem"}} />
                  <h4>Benefits of opening a Zerodha demat account</h4>
                </div>
                <div className='col text-left'>
                  <h5 style={{textAlign:"left"}} > Unbeatable pricing</h5> <br />
                   <p style={{color:"gray", fontSize:"18px",textAlign:"left"}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p><br />

                   <h5 style={{textAlign:"left"}}> Best investing experience </h5> <br />
                   <p style={{color:"gray", fontSize:"18px",textAlign:"left"}}>Simple and intuitive trading platform with an easy-to-understand user interface.</p><br />

                   <h5 style={{textAlign:"left"}}> No spam or gimmicks </h5> <br />
                   <p style={{color:"gray", fontSize:"18px",textAlign:"left"}}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p><br />

                   <h5 style={{textAlign:"left"}}> The Zerodha universe </h5> <br />
                   <p style={{color:"gray", fontSize:"18px",textAlign:"left"}}>More than just an app — gain free access to the entire ecosystem of our partner products.</p><br />
                </div>
            </div>
        </div>
     );
}

export default Benifit;