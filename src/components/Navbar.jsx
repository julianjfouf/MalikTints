import React from "react";
import Icon from "./subcomponents/Icon";
import fbblack from "../../public/icons/fbblack.png";
import igblack from "../../public/icons/igblack.png";
import phoneblack from "../../public/icons/phoneblack.png";
import Button from "./subcomponents/Button";

const Navbar = ({ title }) => {
  return (
    <div className="text-white lg:text-2xl z-10 md:px-12 px-6 py-6 absolute top-0 left-0 flex justify-between w-full items-center lg:flex-row flex-col">
      <div className="flex gap-4 items-center md:flex-row flex-col">
        <h1 className={`${title.className} font-bold text-3xl`}>
          MALIK'S TINTS
        </h1>
        <div className="flex gap-4">
          <Icon
            icon={fbblack}
            link="https://www.facebook.com/profile.php?id=100066425661752"
          />
          <Icon
            icon={igblack}
            link="https://www.facebook.com/profile.php?id=100066425661752"
          />
          <Icon icon={phoneblack} link="tel:510-634-8393" />
        </div>
      </div>
      <div className="flex gap-9 items-center lg:mt-0 mt-4">
        <a
          href="#benefits"
          className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left"
        >
          Benefits
        </a>
        <a
          href="#packages"
          className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left"
        >
          Packages
        </a>
        <a
          href="#portfolio"
          className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left"
        >
          Portfolio
        </a>
        <a
          href="#booking"
          className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left"
        >
          Booking
        </a>
      </div>
    </div>
  );
};

export default Navbar;
