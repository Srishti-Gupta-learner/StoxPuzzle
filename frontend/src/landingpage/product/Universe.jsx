import React from "react";

function Universe() {
  return (
    <div className="container-fluid p-5 ">
      <div className="row text-center">
        <h3>The StoxPuzzle Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* firstrow */}
        <div className="subrow d-inline-flex ">
          <div className="col p-5">
            <img
              src="media/zerodhaFundhouse.png"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>

          <div className="col p-5">
            <img
              src="media/sensibullLogo.svg"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>

          <div className="col p-5">
            <img
              src="media/zerodhaFundhouse.png"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>

        {/* secondrow */}
        <div className="subrow d-inline-flex">
          <div className="col p-5">
            <img
              src="media/streakLogo.png"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding
            </p>
          </div>

          <div className="col p-5">
            <img
              src="media/smallcaseLogo.png"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col p-5">
            <img
              src="media/dittoLogo.png"
              alt="fund"
              style={{ width: "12rem" }}
            />
            <br />
            <p>
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
              <br />
              Sign up for free
            </p>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary mt-3 text-center m-5"
          style={{ borderRadius: "5%", width: "15em" }}
        >
          Signup for Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
