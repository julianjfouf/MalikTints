import React from "react";
import Button from "./subcomponents/Button";
import Benefit from "./subcomponents/Benefit";

const Benefits = ({ title }) => {
  return (
    <div
      id="benefits"
      className="py-[96px] md:px-12 px-6 flex lg:flex-row flex-col gap-12"
    >
      <div className="text-2xl">
        <div>
          <p>BENEFITS</p>
          <h1 className={`${title.className} font-bold text-5xl`}>
            The Best Window Tinting in Tracy, CA
          </h1>
          <p className="pt-4">
            We service anywhere within a 25 mile radius of Tracy, Ca. That
            includes window tinting jobs in Lathrop and Mountain House.{" "}
          </p>
        </div>
        <div className="pt-8">
          <div className="flex justify-start">
            <div className="flex">
              <Button
                title={title}
                px="px-12"
                py="py-6"
                white={false}
                font="text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <Benefit
          title={title}
          number="1"
          header="Best in the Business"
          body="We know exactly what we are doing and you can trust us with your car."
        />
        <Benefit
          title={title}
          number="2"
          header="Protect your Interior"
          body="Having tinted windows can protect the interior of your car by blocking out harmful UV rays."
        />
        <Benefit
          title={title}
          number="3"
          header="Maintain your privacy"
          body="By blocking out most light from the outside, you can have peace of mind knowing that people can’t see you on the inside."
        />
      </div>
    </div>
  );
};

export default Benefits;
