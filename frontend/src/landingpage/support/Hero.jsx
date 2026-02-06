import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid p-5' style={{backgroundColor:"rgb(250, 250, 250"}}>
            <div className='row p-5'>
                <div>
                <h3>Support Portal</h3>
            <button type="button" class="btn btn-primary mt-3" style={{borderRadius:"5%", width:"15em"}}>My Tickets</button>
                </div>
            <input type='text ' placeholder='Eg. How do i Open my Account?' />
            </div>
        </div>
     );
}

export default Hero;