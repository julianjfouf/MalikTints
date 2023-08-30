import React from "react";

const Button = ({ text = "BOOK NOW", title, px = "px-4", py = "py-2", white = false, font="text-2xl" }) => {
  return (
    <>
      {white ? (
        <a
          href="#booking"
          className={`${font} w-full bg-gradient-to-b from-[#fbfbfb] to-[#dddddd] ${px} ${py} ${title.className} text-black`}
        >
          {text}
        </a>
      ) : (
        <a
          href="#booking"
          className={`${font} w-full bg-gradient-to-b from-[#222222] to-[#0B0B0B] ${px} ${py} ${title.className} text-white`}
        >
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
