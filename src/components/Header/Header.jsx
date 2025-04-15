import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import Navigation from "./Navigation/Navigation";
import HeaderInfo from "./HeaderInfo/HeaderInfo";

const Header = ({ title, text, quantity, image }) => {
  return (
    <div className=" relative bg-gradient-to-r from-[#9796F0] to-[#FFE0E8] bg-cover h-full    max-lg:pb-[20px]">
      <div className=" ">
        <HeaderTop />
        <Navigation />
        <HeaderInfo
          title={title}
          text={text}
          quantity={quantity}
          image={image}
        />
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256 C240,320 600,160 960,256 C1200,320 1440,160 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
