import React from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Slideshow from "./Slideshow";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Awards from "./Awards";
import PopularPackages from "./PopularPackages";
import Destinations from "./Destinations";
import WhyChoose from "./WhyChoose";
import Review from "./Review";

export default function Home() {
  return (
    <div>
      <div classname="back">
        <Slideshow />
      </div>
      <NavBar />

      <h1 id="cname">KODAIWOODS</h1>
      <h4 className="tageline">"Adventure Here We Come!"</h4>

      <button id="csu">connect with us</button>

      <PopularPackages />
      <Destinations />
      <Aboutus />
      <WhyChoose />
      <Awards />
      <Review />
      <Footer />
    </div>
  );
}
