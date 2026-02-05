import React from 'react'

function Stats() {
    return (  
        <div className='container-fluid p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5 '>
                    <h3 className='mb-4'>Trust with Confidence</h3>
                    <div className='row mb-3 '>
                        <h5>Customer-first always</h5>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>
                    </div>
                    <div className='row mb-3 '>
                        <h5>No spam or gimmicks</h5>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='row mb-3 '>
                        <h5>The Zerodha Universe</h5>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>
                    </div>
                    <div className='row mb-3 '>
                        <h5>Do better with money</h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src='./media/trustimg.png' alt='trust' style={{width:600}}/>
                </div>
            </div>
        </div>
    );
}

export default Stats;