import React from "react";
import "./Catagory.css";

export default function Catagory(props) {
  return (


    <div className="catagory-container">
      <img
        src={props.catdata.catLogo}
        alt="CatLogo"
        className="catagory-items-image"
      />
      <p className="catagory-items-name">{props.catdata.catName}</p>
    </div>
  );
}
