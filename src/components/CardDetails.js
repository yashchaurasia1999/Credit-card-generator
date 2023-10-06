import React from "react";
import "./cardDetails.css";
import CardForm from "./CardForm";
import line from "./line.jpg";
export default function CardDetails(props) {

  const cardNo=props.cardNo;
  const year=props.year;
  const month=props.month;
  const cvv=props.cvv;

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #d3d3d3, #7d8491)',
    borderRadius:"20px",
    marginTop:"20px",
    height:"230px"
    // Add other styles if needed
  };
  return (
    <>
    
    
      <div className="credit-card-wrap ">
        {/* <div className="mk-icon-world-map"></div> */}
        <div className="credit-card-inner">
          <header className="header">
            <div className="credit-logo">
              <div className="shape">
                <span className="txt">PB</span>
              </div>{" "}
              <span className="text">Punjab National Bank</span>
            </div>
          </header>
          <div className="mk-icon-sim"></div>
          <div className="credit-font credit-card-number">
            {props.flag == true ? cardNo : "0000 - 0000 - 0000 - 0000"}
          </div>
          <footer className="footer">
            <div className="clearfix">
              <div className="pull-left">
                <div className="credit-card-date">
                  <span className="title">
                    {props.flag == true ? Number(year)+7 : "Year"}
                  </span>
                  <span className="credit-font">
                    {props.flag == true ? month : "Month"}
                  </span>
                </div>
                <div className="credit-font credit-author">Cuvette</div>
              </div>
            </div>
          </footer>
        </div>
		<div className="credit-card-inner" style={gradientStyle}>
          <header className="header">
            <div className="blackHead">
                <img src={line} className="lineBar"/>
            </div>
          </header>
          
          
          <footer className="footer">
            <div className="clearfix">
              <div className="pull-left">
                  <div className="cvv">
                    <span className="maincvv">{props.flag == true ? cvv : "cvv"}</span>
                  </div>
                <div className="credit-font credit-author"></div>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </>
  );
}
