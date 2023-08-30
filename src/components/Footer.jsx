import React from "react";
import Icon from "./subcomponents/Icon";
import fbblack from "../../public/icons/fbblack.png";
import igblack from "../../public/icons/igblack.png";
import phoneblack from "../../public/icons/phoneblack.png";

const Footer = ({ title }) => {
  return (
    <div className="p-12 bg-[#0b0b0b] -translate-y-[1px] relative flex justify-between text-2xl text-white xl:flex-row flex-col gap-12">
        <div className="absolute bg-[#0b0b0b] bottom-0 left-0 w-full h-1"></div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex md:flex-row flex-col gap-4 md:items-center">
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
        <p>&copy; 2023 Malik's Tints | All Rights Reserved</p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className={`${title.className}`}>Navigation</h3>
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
      <div className="flex flex-col items-start gap-4">
        <h3 className={`${title.className}`}>Contact Info</h3>
        <p>(510) 634-8393</p>
        <p>malikstints@gmail.com</p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className={`${title.className}`}>Service Areas</h3>
        <p>Tracy</p>
        <p>Lathrop</p>
        <p>Mountain House</p>
      </div>
    </div>
  );
};

export default Footer;
