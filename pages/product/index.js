"use client";

import Image from "next/image";
import Title from "../../components/ui/Title";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const items = [
  {id:1, name: "ketcap", price: 5 },
  { id:2 ,name: "mayonez", price: 2 },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [initialPrice, setInitialPrice] = useState(prices[0]);
  const [extraItems, setExtraItems] = useState(items);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart  = () => {

    let mockProduct = {
      id: Math.random(),
      name: "Pizza",
      price: initialPrice,
      extras: extras,
      quantity: 1,
    }
    dispatch(addProduct(mockProduct));
  }
  const handleExtraItems = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      setExtras([...extras, item]);
      setInitialPrice((prev) => {
        return prev + item.price;
      });
    } else {
      setExtras(extras.filter((extra) => extra.name !== item.name));
      setInitialPrice((prev) => {
        return prev - item.price;
      });
    }
  };
  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image
          src="/images/pizza1.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title className="text-6xl" title={"Pizza"} />
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $ {initialPrice}
        </span>
        <p className="text-sm my-4 md:pr-24">lorem asgasga sgas g</p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>

          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => setInitialPrice(prices[0])}
            >
              <Image src="/images/pizza1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => setInitialPrice(prices[1])}
            >
              <Image src="/images/pizza1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => setInitialPrice(prices[2])}
            >
              <Image src="/images/pizza1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          {extraItems &&
            extraItems.map((item) => (
              <label className="flex items-center gap-x-1" key={item.name}>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  onChange={(e) => handleExtraItems(e, item)}
                />
                <span className="text-sm font-semibold">
                  {item.name} - {item.price}
                </span>
              </label>
            ))}
        </div>
        <button onClick={addToCart} className="inline-block cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Index;
