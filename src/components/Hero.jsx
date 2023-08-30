import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import car from "../../public/images/malikcarasset.svg";
import Button from "./subcomponents/Button";

const Hero = ({ title }) => {
  return (
    <div className="bg-gradient-to-b relative from-[#222222] to-[#0B0B0B] text-white min-h-screen flex justify-between items-center">
      <Navbar title={title} />
      <div className="flex-col flex h-full w-full justify-center">
        <h1 className={`2xl:text-[320px] xl:text-[240px] lg:text-[200px] md:text-[160px] sm:text-[120px] text-[72px] absolute md:translate-y-[-220px] -translate-y-[160px] md:left-12 left-6 ${title.className} font-bold bg-gradient-to-b from-[#fbfbfb] to-[#4D4D4D] text-transparent bg-clip-text`}>TINTING</h1>
        <div className="flex items-end justify-between z-10">
          <Image
            quality={100}
            priority
            src={car}
            className="aspect-auto object-contain w-3/5 md:pr-12 pr-6"
          />
          <div className="flex md:pr-12 pr-6 md:pb-24 pb-12">
            <Button
              title={title}
              px="lg:px-[72px] sm:px-[36px] px-4"
              py="lg:py-[36px] sm:py-[18px] py-2"
              font="lg:text-4xl"
              white={true}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-6 md:left-12 bottom-6 md:bottom-12 flex lg:gap-[72px] md:gap-[36px] gap-4 z-20 md:flex-row flex-col">
        <div>
          <h3
            className={`${title.className} lg:text-2xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent`}
          >
            UV Rejection
          </h3>
          <p className="font-bold xl:text-6xl text-4xl mt-2 bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent">99%</p>
        </div>
        <div>
          <h3 className={`${title.className} lg:text-2xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent`}>
            Solar Energy Rejection
          </h3>
          <p className="font-bold xl:text-6xl text-4xl mt-2 bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent">40%</p>
        </div>
        <div>
          <h3 className={`${title.className} lg:text-2xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent`}>Tinting Options</h3>
          <div className="flex md:gap-9 gap-4 mt-2">
            <p className="font-bold xl:text-6xl text-4xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent">5%</p>
            <p className="font-bold xl:text-6xl text-4xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent">20%</p>
            <p className="font-bold xl:text-6xl text-4xl bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] bg-clip-text text-transparent">35%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
