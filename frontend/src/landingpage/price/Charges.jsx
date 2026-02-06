import React from 'react'

function charges() {
    return ( 
        <div className='contanier-fluid p-5'>
              <div className='row text-center p-5'>
            <h4>Charges</h4>
            <p>List of all charges</p>
            <div className='col p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\pricing0.svg' alt='price' /> 
            <p>Free Account opening</p></div>
            <div className='col p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\pricing0.svg' alt='price' />
            <p>Free equity delivery and direct mutual funds</p>
            </div>
            < div className='col p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\twentypricemf.svg' alt='price' />
            <p>Intraday and F&O</p>
            </div>
            </div>
        </div>
     );
}

export default charges;
<>

</>