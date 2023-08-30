import Image from "next/image";
import React from "react";
import Button from "./Button";

const Package = ({ title, name, desc, popular, price, image }) => {
  return (
    <>
      <div className="bg-white text-black lg:flex hidden flex-col relative p-9 w-full max-w-[1440px] text-2xl">
        <div
          className={`flex justify-between items-center ${title.className} text-5xl`}
        >
          <h1>{name}</h1>
          <h3>{price}</h3>
        </div>
        <div className="flex pt-4 text-left">
          <div className="w-full">
            <p>{desc}</p>
            <div className="py-8">
              <h2>Tinting options:</h2>
              <ul className="list-style-disc">
                <li>5%</li>
                <li>20%</li>
                <li>35%</li>
              </ul>
            </div>
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
          <div className="w-full flex">
            <Image className="object-contain aspect-auto" src={image} />
          </div>
        </div>
        {popular ? (
          <div
            className={`bg-[#FFB800] px-4 pt-2 pb-3 rounded-full flex justify-center items-center ${title.className} absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0`}
          >
            Most Popular
          </div>
        ) : null}
      </div>
      <div className="bg-white text-black lg:hidden flex flex-col relative p-9 w-full max-w-[1440px] text-2xl">
        <div
          className={`flex flex-col items-center ${title.className} text-5xl`}
        >
          <h1>{name}</h1>
          <h3 className="mt-2">({price})</h3>
        </div>
        <div className="flex pt-4 flex-col gap-4 items-center text-center">
          <div className="w-full">
            <p>{desc}</p>
          </div>
          <div className="w-full flex py-4">
            <Image className="object-contain aspect-auto" src={image} />
          </div>
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
        {popular ? (
          <div
            className={`bg-[#FFB800] sm:text-2xl text-base px-4 pt-2 sm:pb-3 pb-2 rounded-full flex justify-center items-center ${title.className} absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0`}
          >
            Most Popular
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Package;
