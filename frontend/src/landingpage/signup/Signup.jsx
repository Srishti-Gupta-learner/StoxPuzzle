import React from 'react'

function Signup() {
    return (  
        <div className='container-fluid p-5'>
            <div className='row  text-left'>
                <div className='col p-5'>
                    <img src='media/signup.svg' alt='signup' />
                </div>
                 <div className='col p-5'>
                    <form id='Account_form d-inline-flex'>
                    <h2>Signup</h2>
                    <p style={{fontSize:"18px" , color:"gray"}}>Or track your existing application</p>
                    <div className='row not-around d-flex' style={{width:"20em", border:"solid 1px"}}>
                      <span> <img src='media/flag.png' alt='flag' />+91</span>
                       <input type='number' placeholder='Enter your mobile number' style={{width:"200", border:"none"}} />
                    </div>
                    <button type="button" class="btn btn-primary mt-3" style={{borderRadius:"5%", width:"15em"}}>Get OTP</button>
                    <p>By proceeding, you agree to the Zerodha terms & privacy policy</p><hr />
                    <p>Looking to open NRI account? Click here</p>
                 </form>
                 </div>
            </div>
        </div>
    );
}

export default Signup;