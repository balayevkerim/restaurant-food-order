import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    console.log(categoryList,productList)
    const filteredProducts = productList.filter(product=>product.category==categoryList[active].title)
    setFilteredList(filteredProducts)
  },[active])
  return (
    <div className="container mx-auto flex flex-col items-center px-3 my-10">
      <Title title={"Menu"} className={"text-4xl text-center"} />
      <div className="flex gap-5 mt-3 ">
        {categoryList &&
          categoryList.map((category, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={` ${
                active == index ? "bg-secondary text-white" : " text-black"
              } transition-all px-6 py-2 rounded-3xl cursor-pointer hover:bg-secondary hover:text-white`}
            >
              {category.title}
            </button>
          ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
        {filteredList.length > 0 &&
          filteredList.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
