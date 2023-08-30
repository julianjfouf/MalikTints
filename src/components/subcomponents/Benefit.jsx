import React from "react";

const Benefit = ({ title, number, header, body}) => {
  return (
    <div className="flex">
      <div className="w-16 text-white flex justify-center items-center h-16 rounded-full bg-gradient-to-b from-[#222222] to-[#0b0b0b] font-bold text-3xl p-8">
        {number}
      </div>
      <div className="pl-4 text-2xl">
        <h2 className={`${title.className} text-3xl`}>{header}</h2>
        <p className="pt-2">{body}</p>
      </div>
    </div>
  );
};

export default Benefit;
