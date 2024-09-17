import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl mt-10">
      <div className="relative bg-[#f1f2f3] mx-auto rounded-bl-[20px] p-10 rounded-tl-2xl rounded-tr-2xl" >
        <div className="relative h-36 w-36 mx-auto">
          <Link href="/product">
          <Image
            src={"/images/pizza1.png"}
            alt="sasg"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-all"
          />
          </Link>
          
        </div>
      </div>

      <div className="p-10">
        <h1 className="text-white">Burger</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          quos.
        </p>
        <div className="flex justify-between items-center mt-5">
          <p className="text-white">$20</p>
          <div className="rounded-full bg-primary p-3 hover:bg-[#e69c00] transition-all">
            <FaShoppingCart color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
