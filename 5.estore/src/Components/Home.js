import React from "react";
import "../Styles/Home.css";
import background from "../images/ecommerce-background5.jpg";
import Product from "./Product";
import pen from "../images/pens.jpg";
import coffee from "../images/coffee.jpg";
import gum from "../images/gum2.jpg";
import heater from "../images/heater.jpg";
import lamp from "../images/lamp.jpg";
import paper from "../images/paper.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={background} alt="background image" className="home_image" />
        <div className="home_row">
          <Product
            id="123456"
            title="Schneider Ray Fountain Pen M, Refillable, Onyx Barrel, Royal Blue Erasable Ink Cartridge, Pack of 1 Pen"
            price={30.75}
            rating={5}
            image={pen}
          />
          <Product
            id="234526"
            title="Simple Designs LD1003-SLV Basic Metal Flexible Hose Neck Desk Lamp, Silver"
            price={16.33}
            rating={4}
            image={lamp}
          />
        </div>
        <div className="home_row">
          <Product
            id="987654"
            title="Trident Sugarfree Gum, Spearmint (3 Count)"
            price={3.68}
            rating={3}
            image={gum}
          />
          <Product
            id="654312"
            title="Folgers Classic Roast Medium Dark Roast, Ground Coffee, 816g Canister"
            price={7.99}
            rating={4}
            image={coffee}
          />
          <Product
            id="753135"
            title="Amazon Basics 1500W Ceramic Personal Heater with Adjustable Thermostat, Silver"
            price={45.08}
            rating={3}
            image={heater}
          />
        </div>
        <div className="home_row">
          <Product
            id="978645"
            title="HP Printer Paper 8.5x11 Office 20 lb 3 Ream Case 1500 Sheets 92 Bright Made in USA FSC Certified Copy Paper HP Compatible 112090C"
            price={32.99}
            rating={5}
            image={paper}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
