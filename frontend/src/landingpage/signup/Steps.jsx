import React from "react";

function Steps() {
  return (
    <div
      className="container-fluid p-3 text-center"
      style={{ backgroundColor: "rgb(243, 245, 243)" }}
    >
      <h4>Steps to open a demat account with Zerodha</h4>
      <div className="row p-5 text-center">
        <div className="col">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EEX0EHTTePE?si=O1s6uk2LdXDJALyZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="col p-5 text-left">
            <h5 > 
                <span className="p-2" style={{borderRadius:"50%", border:"solid black 1px" , width:"1em"}}>01</span> &nbsp;
                Enter the requested Detail.
            </h5><hr />
             <h5 > 
                <span className="p-2" style={{borderRadius:"50%", border:"solid black 1px" , width:"1em"}}>02</span> &nbsp;
                Complete e-sign & verification.
            </h5><hr />
             <h5 > 
                <span className="p-2" style={{borderRadius:"50%", border:"solid black 1px" , width:"1em"}}>03</span> &nbsp;
                Start Investing!
            </h5><hr />
        </div>

      </div>
    </div>
  );
}

export default Steps;
