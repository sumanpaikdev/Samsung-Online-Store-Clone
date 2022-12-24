import React from "react";
import "./Holyitem.css";

export default function Holyitem(props) {
  return (
    <div className="holy-container">
      <img src={props.hdata.himage} className="holy-img" />
      <p className="holy-one">{props.hdata.hname}</p>
      <p className="holy-two">
        &#x20b9; {props.hdata.hprice} { props.hdata.hcutprice && <span>&#x20b9;{props.hdata.hcutprice}</span>}
      </p>
      <hr />
      <p className="holy-three">Fest offer &#x20b9;{props.hdata.hoffer}*</p>
      <p className="holy-four">Get up to ₹{props.hdata.hvoucher} discount on this product on Samsung Shop App</p>
      <button className="holy-buy">Buy now</button>
      <span className="off">{props.hdata.off}% off</span>
    </div>
  );
}
