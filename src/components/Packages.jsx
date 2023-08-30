import React from "react";
import Package from "./subcomponents/Package";
import img1 from "../../public/images/rearwindows.png";
import img2 from "../../public/images/frontwindows.png";
import img3 from "../../public/images/fullwindows.png";

const Packages = ({ title }) => {
  return (
    <div id="packages" className="py-[96px] text-white bg-gradient-to-b flex flex-col gap-12 items-center text-center w-full from-[#222222] to-[#0b0b0b] px-6 md:px-12">
      <div className="flex flex-col">
        <p className="text-2xl">PACKAGES</p>
        <h1 className={`${title.className} font-bold text-5xl max-w-4xl`}>
          Our Most Premium Packages
        </h1>
        <p className="pt-4 max-w-4xl text-2xl">
          We allow for a lot of customizability and flexibility when it comes to
          window tinting packages because our ultimate goal is to be able to
          meet your needs and guarantee that you get exactly what you want.
        </p>
      </div>

      <Package
        title={title}
        name="Back Windows"
        price="$160"
        desc="If you only need your back windows tinted then this is the perfect package for you!"
        image={img1}
      />
      <Package
        title={title}
        name="Front Windows"
        price="$90"
        desc="If you only need your front windows tinted then this is the perfect package for you!"
        image={img2}
      />
      <Package
        title={title}
        name="Full Service"
        price="$210"
        desc="If you want to get the most out of your dollars, this is the package for you!"
        image={img3}
        popular={true}
      />
    </div>
  );
};

export default Packages;
