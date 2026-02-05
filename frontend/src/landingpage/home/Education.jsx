import React from 'react'

function Education() {
    return ( 
         <div className='container-fluid p-3 mt-0'>
            <div className='row p-3'>
                <div className='col-6' style={{width:"400", height:"400"}}>
                  <img src='media/education.svg' alt='edu' />
                </div>
                <div className='col-6 p-5'>
                    <h3>Free and Open Market Education</h3>
                    <p className='mt-3'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='n' style={{textDecoration:"none"}}>Varsity
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href='n' style={{textDecoration:"none"}}>Trading Q&A
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;