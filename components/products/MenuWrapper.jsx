import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col items-center px-3 my-10">
      <Title title={"Menu"} className={"text-4xl text-center"} />
      <div className="flex gap-5 ">
        <button className="bg-secondary px-6 py-2 rounded-3xl cursor-pointer text-white">
          All
        </button>
        <button className=" px-6 py-2 rounded-3xl cursor-pointer text-black  transition-all hover:bg-secondary hover:text-white">
          Burger
        </button>

        <button className="px-6 py-2 rounded-3xl cursor-pointer text-black transition-all hover:bg-secondary hover:text-white">
          Pizza
        </button>

        <button className="px-6 py-2 rounded-3xl cursor-pointer text-black transition-all hover:bg-secondary hover:text-white">
          Drink
        </button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
