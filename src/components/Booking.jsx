import React from "react";
import Icon from "./subcomponents/Icon";
import fbblack from "../../public/icons/fbblack.png";
import igblack from "../../public/icons/igblack.png";
import phoneblack from "../../public/icons/phoneblack.png";

const Booking = ({ title }) => {
  return (
    <div id="booking" className="py-[96px] text-white text-2xl px-12 bg-gradient-to-b from-[#222222] to-[#0b0b0b] flex flex-col">
      <div className="flex flex-col">
        <p className="text-2xl">BOOKING</p>
        <h1 className={`${title.className} font-bold text-5xl max-w-4xl`}>
          How To Book
        </h1>
        <p className="pt-4 max-w-4xl text-2xl">
          This is the process behind booking a window tinting appointment with
          us whether you are located here in Tracy or anywhere near in our
          service areas.
        </p>
      </div>
      <div className="flex flex-col pt-9">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between py-9 border-b-[1px] border-[#343434]">
          <h2 className={`lg:w-1/2 ${title.className} text-3xl`}>Step 01</h2>
          <div className="flex flex-col lg:w-1/2">
            <p>
              Select your preferred social media and go to our page by either
              looking it up yourself{" "}
              <span className="text-sky-500">@malikstints</span> or by clicking
              one of the icons we have provided for you here. You can also book
              through a call to{" "}
              <span className="text-sky-500">(510) 634-8393</span>.
            </p>
            <div className="flex gap-4 mt-4">
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
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between py-9 border-b-[1px] border-[#343434]">
          <h2 className={`lg:w-1/2 ${title.className} text-3xl`}>Step 02</h2>
          <p className="lg:w-1/2">
            Send us a dm to express your interest in working with us as well as
            which service package you would like to have done.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between py-9 border-b-[1px] border-[#343434]">
          <h2 className={`lg:w-1/2 ${title.className} text-3xl`}>Step 03</h2>
          <p className="lg:w-1/2">
            Once we see your message we will be able to arrange an appointment
            with you at your earliest convenience and we can also discuss
            pricing and agree on a price as well as the payment method.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between py-9 border-b-[1px] border-[#343434]">
          <h2 className={`lg:w-1/2 ${title.className} text-3xl`}>Step 04</h2>
          <p className="lg:w-1/2">Get your windows tinted!</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
