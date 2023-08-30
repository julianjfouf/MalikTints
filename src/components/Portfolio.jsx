import Image from "next/image";
import React from "react";

const Portfolio = ({ title }) => {
  return (
    <div id="portfolio" className="py-[96px] px-12 text-center">
      <div className="flex flex-col items-center">
        <p className="text-2xl">PORTFOLIO</p>
        <h1 className={`${title.className} font-bold text-5xl max-w-4xl`}>
          What We Have Done So Far
        </h1>
        <p className="pt-4 max-w-4xl text-2xl">
          If you are interested in what we do and would like to see more, check
          out our social media pages for even more pictures.
        </p>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default Portfolio;
