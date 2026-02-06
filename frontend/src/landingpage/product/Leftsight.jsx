import React from "react";

function Leftsight() {
  return (
    <div className="container-fluid">
      <div className="row text-center p-5">
        <div className="col p-5">
          <img src="media/kite.png" alt="kite" />
        </div>

        <div className="col p-5 m-5">
          <h4>Kite</h4>
          <p style={{fontSize:"16px"}}>
            Our ultra-fast flagship trading platform with <br/>streaming market data,
            advanced charts, an <br/>elegant UI, and more. Enjoy the Kite <br/>experience
            seamlessly on your Android and <br/>iOS devices. Try demo Learn more
          </p>
          <img src="media/googlePlayBadge.svg" alt="playstore" />
          <img src="media/appstoreBadge.svg" />
        </div>
      </div>
    </div>
  );
}

export default Leftsight;
