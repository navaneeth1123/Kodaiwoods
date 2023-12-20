import React from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "700px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1621254622595-25701cd88dd7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1632729566882-82c178d1c034?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://live.staticflickr.com/65535/53351231849_8d4f198b81_b.jpg",
  },
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide
        autoplay
        duration={2000}
        transitionDuration={1500}
        arrows={false}
        pauseOnHover={false}
        infinite={true}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
