import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBahai } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p>
        <FontAwesomeIcon
          icon={faBahai}
          rotation={90}
          style={{
            "--fa-primary-color": "#000000",
            "--fa-secondary-color": "#000000",
          }}
        />
      </p>
      <img src="./images/DH.png" alt="DH-logo" />
      <ul className="list_Iconos">

        <a href="https://www.facebook.com/digitalhouseschool/" target="_blank">
          <li>
            <img src="./images/ico-facebook.png" alt="facebook" />
          </li>
        </a>

        <a href=" https://www.tiktok.com/@_digitalhouse" target="_blank">
          <li>
            <img src="./images/ico-tiktok.png" alt="tiktok" />
          </li>
        </a>

        <a href="https://www.digitalhouse.com/ar" target="_blank">
          <li>
            <img src="./images/ico-whatsapp.png" alt="whatsapp" />
          </li>
        </a>

        <a href="https://www.instagram.com/_digitalhouse/" target="_blank">
          <li>
            <img src="./images/ico-instagram.png" alt="instagram" />
          </li>
        </a>
        
      </ul>
    </footer>
  );
};

export default Footer;
