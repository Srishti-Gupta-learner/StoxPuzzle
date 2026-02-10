import React from "react";

function Team() {
  return (
    <div className="container-fluid p-5">
      <div className="row text-center p-5">
        <h3 className="mb-5">People</h3>
        <div className="col-4 p-5">
            <img src="media\Man.png" alt="nitin"  style={{borderRadius:"50%", width:"300px"}}/>
            <p>Founder, CEO</p>
        </div>
        <div className="col-8 p-5">
          <p className="p-3">
            Nithin bootstrapped and founded StoxPuzzle in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br /><br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /><br />
            Playing basketball is his zen. <br /><br />Connect on Homepage / TradingQnA /
            Twitter
          </p>
        </div>
      </div>

       <div className="row p-5 text-center">
        <div className="col p-5">
          <img src="media/Man.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /><p>Co-Founder</p>
        </div>
          <div className="col p-5">
          <img src="media/girl.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /><p>CTO</p>
        </div>
          <div className="col p-5">
          <img src="media/woman.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /><p>COO</p>
        </div>
      </div>

       <div className="row p-5 text-center">
          <div className="col p-5">
          <img src="media/girl.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /><p>Director Strategy</p>
        </div>
          <div className="col p-5">
          <img src="media/woman.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /><p>Marketing Head</p>
        </div>
      </div>
      
       <div className="row p-5 text-center">
        <div className="col p-5">
          <img src="media/girl.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /> <p>CCO</p>
        </div>
          <div className="col p-5">
          <img src="media/woman.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /> <p>Chief of Education</p>
        </div>
          <div className="col p-5">
          <img src="media/Man.png" alt="man" style={{borderRadius:"50%", width:"300px"}} /> <p>Director</p>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default Team;
