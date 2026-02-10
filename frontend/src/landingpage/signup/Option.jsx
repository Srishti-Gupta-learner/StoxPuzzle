import React from 'react'

function Option() {
    return ( 
        <div className='container-fluid p-3  text-center'>
            <h4 >Investment options with StoxPuzzle demat account</h4>
                
               <div className='bar d-inline-flex '>

                <div className='row text-left p-5'>
                 <div className='col d-flex p-3'>
                    <img src='media/stocks.png' alt='stock' />
                    <div>
                        <h5>Stocks</h5>
                    <p>Invest in all exchange-listed securities</p>
                    </div>
                  </div>
                 </div>

                 <div className='row text-left p-5'>
                 <div className='col d-flex p-3'>
                    <img src='media/Mutualfund.png' alt='stock' />
                    <div>
                        <h5>Mutual Fund</h5>
                    <p>Invest in commission-free direct mutual funds</p>
                    </div>
                  </div>
                 </div>

               </div>
                
                
                 <div className='bar d-inline-flex'>

                <div className='row text-left p-5'>
                 <div className='col d-flex p-3'>
                    <img src='media/Ipo.png' alt='stock' />
                    <div>
                        <h5>IPO's</h5>
                    <p>Apply to the latest IPOs instantly via UPI</p>
                    </div>
                  </div>
                 </div>

                 <div className='row text-left p-5'>
                 <div className='col d-flex p-3'>
                    <img src='media/FandO.png' alt='stock' />
                    <div>
                        <h5>Futures and Options</h5>
                    <p>Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                  </div>
                 </div>

               </div>

              <p>
                  <button type="button" class="btn btn-primary mt-3" style={{borderRadius:"5%", width:"15em"}}>Explore Investments</button>
              </p>
        </div>
     );
}

export default Option;