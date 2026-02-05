import React from 'react'

function Price() {
    return ( 
       <div className='container-fluid p-5 mb-0'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
            <h3>Unbeatable Pricing</h3>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
           </div>
            <div className='col-2 p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\pricing0.svg' alt='price' /> 
            <p>Free Account opening</p></div>
            <div className='col-2 p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\pricing0.svg' alt='price' />
            <p>Free equity delivery and direct mutual funds</p>
            </div>
            < div className='col-2 p-5 mt-0' style={{width:"10", height:"10"}}>
            <img src='media\twentypricemf.svg' alt='price' />
            <p>Intraday and F&O</p>
            </div>
         
         </div>
        </div>
     );
}

export default Price;