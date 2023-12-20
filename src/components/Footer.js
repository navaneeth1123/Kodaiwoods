import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import img1 from "./images/footerlogo.png";
import img2 from "./images/whiteline.png";

export default function Footer() {
  return (
    <div>
      <div id="c1">
        <img id="img1" src={img1} />

        <div>
          <div className="row">
            <div className="col">
              <div>
                <div className="head">
                  <h5 id="color2">Contect us</h5>
                </div>
                <div id="color" className="col">
                  <Link id="color1" to="">
                    {" "}
                    <FontAwesomeIcon icon={faPhone} /> +919943108800
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <img id="whiteline" src={img2} />
            </div>

            <div className="col">
              <h5 id="color2"> Email us</h5>

              <Link id="color" to="mailto:kodaiwoods3@gmail.com">
                navaneethrl96@gmail.com
              </Link>
            </div>

            <div className="col">
              <img id="whiteline" src={img2} />
            </div>

            <div id="col1" className="col">
              <div>
                <div className="head">
                  <h5 id="color2">Follow us</h5>
                </div>
                <div>
                  <Link
                    id="color3"
                    to="https://www.facebook.com/profile.php?id=100088911067830"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    id="color3"
                    to="https://www.instagram.com/kodai_woods/?hl=en"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>

                  <Link id="color3" to="https://www.whatsapp.com/7904301930">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>

                  <Link id="color3" to="https://linkedin/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link id="color3" to="https://www.twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p id="copyrights">
          Copyright © 2023 by KODAIWOODS. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
