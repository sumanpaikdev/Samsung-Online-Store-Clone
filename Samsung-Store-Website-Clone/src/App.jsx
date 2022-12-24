import React from "react";
import "./App.css";
import catdata from "./Data/catagory.json";
import holidaydata from "./Data/Holyday.json"


import Header from "./components/navbar/Header";
import ShopOffer from "./components/headline/ShopOffer";
import Catagory from "./components/catagories/Catagory";
import Slideshow from "./components/slideshow/Slideshow";
import HDeals from "./components/Holidayitems/HDeals";
import Holyitem from "./components/Holidayitems/Holyitem";
import Footer from "./components/footer/Footer";


// header image links
import samsungLogo from "./samsung.png";
import navSearch from "./profile/search (1).png";
import navCart from "./profile/shopping-cart.png";
import navUser from "./profile/user.png";

// social links 
import facebook from "./facebook.png"
import twitter from "./twitter.png"
import insta from "./instagram.png"
import whatsapp from "./whatsapp.png"
import youtube from "./youtube.png"
import linkedin from "./linkedin-logo.png"

const catagory = catdata.map((catitems) => {
  return <Catagory catdata={catitems} key={catitems.id}/>;
});
const holiitem = holidaydata.map((hldata) => {
  return(
    <Holyitem
      hdata={hldata}
      key={hldata.id}
    />
  )
})
function openNavbar() {
  document.getElementById("sideBar").style.width = "100%"
}
function closeNavbar() {
  document.getElementById("sideBar").style.width = "0px"
}
export default function App() {
  return (
    <div className="app-container">
      <Header
        samsungLogo={samsungLogo}
        navSearch={navSearch}
        navCart={navCart}
        navUser={navUser}
        open={openNavbar}
        close={closeNavbar}
      />
      <ShopOffer />
      <div className="catagory">{catagory}</div>
      <Slideshow/>
      <HDeals/>
      <div className="hl-items">{holiitem}</div>
      <Footer
        facebook={facebook}
        twitter={twitter}
        insta={insta}
        whatsapp={whatsapp}
        youtube={youtube}
        linkedin={linkedin}
      />
    </div>
  );
}
