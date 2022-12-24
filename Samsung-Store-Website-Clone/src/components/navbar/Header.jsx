import React from "react";
import "./Header.css"


export default function Header(props) {
    return(
        <div className="header-container">
            <nav className="nav-container">
                <div className="nav-logo">
                    <img src={props.samsungLogo} alt="brandLogo" className="samsung-logo" />
                </div>

                {/* nav menu items collection  */}
                <div className="nav-menu">
                    <ul className="nav-menu-ul">
                        <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Mobile</a>
                        </li>
                        {/* <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">TV & AV</a>
                        </li> */}
                        <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Home Appliances</a>
                        </li>
                        <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Laptops & Monitors</a>
                        </li>
                        {/* <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Displays</a>
                        </li> */}
                        <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Accessories</a>
                        </li>
                        {/* <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">SmartThings</a>
                        </li> */}
                        <li className="nav-menu-ul-li">
                            <a href="javascript:void(0)" className="nav-menu-ul-li-a">Offers</a>
                        </li>
                    </ul>
                </div>
                <div className="sidenav" id="sideBar">
                    <a href="javascript:void(0)" className="close--bar"  onClick={props.close}>&times;</a>
                    <a className="items" href="#">Mobile</a>
                    {/* <a className="items" href="#">TV & AV</a> */}
                    <a className="items" href="#">Home Appliances</a>
                    <a className="items" href="#">Laptops & Monitors</a>
                    {/* <a className="items" href="#">Displays</a> */}
                    <a className="items" href="#">Accessories</a>
                    {/* <a className="items" href="#">SmartThings</a> */}
                    <a className="items" href="#">Offers</a>
                    <a className="items" href="#">Support</a>
                    <a className="items" href="#">For Business</a>
                </div>
                {/* nav support part */}
                <div className="nav-support">
                    <a href="javascript:void(0)" className="nav-support-a">Support</a>
                    <a href="javascript:void(0)" className="nav-support-a">For Business</a>
                </div>

                {/* nav login info  */}
                <div className="nav-account">
                    <a href="javascript:void(0)" className="nav-account-a">
                        <img src={props.navSearch} alt="search" className="nav-account-a-img" />
                    </a>
                    <a href="javascript:void(0)" className="nav-account-a">
                        <img src={props.navCart} alt="cart" className="nav-account-a-img" />
                    </a>
                    <a href="javascript:void(0)" className="nav-account-a">
                        <img src={props.navUser} alt="login" className="nav-account-a-img" />
                    </a>

                </div>
                <span className="open--bar" onClick={props.open}>&#9776;</span>
            </nav>
        </div>
    )
}