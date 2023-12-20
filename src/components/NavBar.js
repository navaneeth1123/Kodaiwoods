import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "./images/logo (2).png";

export default function NavBar() {
  const [menuu, setMenuu] = useState(false);

  const handleClickScroll0 = () => {
    const element = document.getElementById("back");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll1 = () => {
    const element = document.getElementById("pp");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById("desti");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll3 = () => {
    const element = document.getElementById("abtus");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScroll4 = () => {
    const element = document.getElementById("c1");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="fix">
        <nav id="fixed" className="navbar navbar-expand">
          <Link id="a" className="navbar-logo">
            <img id="image1" src={image1} />
          </Link>

          <ul
            className={menuu ? "nav-menu" : "navlink"}
            onClick={() => setMenuu(true)}
          >
            <li onClick={handleClickScroll0} className="navitem">
              <Link id="a" to="/">
                HOME
              </Link>
            </li>

            <li className="navitem">
              <Link onClick={handleClickScroll1} id="a" to="/package">
                PACKAGES
              </Link>
            </li>

            <li className="navitem">
              <Link onClick={handleClickScroll2} id="a" to="/des">
                DESTINATIONS
              </Link>
            </li>

            <li className="navitem">
              <Link onClick={handleClickScroll3} id="a" to="/about">
                ABOUT
              </Link>
            </li>

            <li className="navitem">
              <Link onClick={handleClickScroll4} id="a" to="/contectus">
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="menu" onClick={() => setMenuu(!menuu)}>
            {menuu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
