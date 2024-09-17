import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

function Carousel() {
  return (
    <div className="h-[calc(100vh_-_88px)]">
      <div className="relative w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="backgorund"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute top-[20%] left-[9%] flex flex-col gap-3">
          <Title
            title="Fast Food Restaurant"
            className="text-[2rem] sm:text-[3.5rem] text-white"
          />
          <p className="text-white sm:w-[500px] w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse
            ex assumenda! Facilis, ad cum quasi aliquid laboriosam praesentium
            natus nemo, reprehenderit voluptatum temporibus non, esse dolores
            tenetur in explicabo.
          </p>
          <button
            type="button"
            className="w-[200px] cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
