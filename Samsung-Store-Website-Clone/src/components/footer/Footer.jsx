import React from "react";
import "./Footer.css"

export default function Footer(props) {
    return(
        <div className="footer">
            <div className="left">
                <p className="pf">India/English</p>
            </div>
            <div className="right">
                <img src={props.facebook} className="link" />
                <img src={props.twitter} className="link" />
                <img src={props.insta} className="link" />
                <img src={props.whatsapp} className="link" />
                <img src={props.youtube} className="link" />
                <img src={props.linkedin} className="link" />
            </div>
        </div>
    )
}