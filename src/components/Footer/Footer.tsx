import React from "react";
import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black fixed flex justify-around items-center w-full bottom-0">
      <Link to="/contact" className=" text-white">
        Contact Us ↗
      </Link>
      <div className="flex gap-4 p-4">
        <a href="https://twitter.com/">
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagramIcon} alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
