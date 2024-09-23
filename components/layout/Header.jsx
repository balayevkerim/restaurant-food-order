import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Search from "../ui/Search";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../ui/Sidebar";
import Link from "next/link";
import {  useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[5.5rem]  bg-secondary text-white">
      <div className="container mx-auto flex justify-between items-center h-full px-3">
        <div>
          <Logo />
        </div>
        <div>
          <nav className="md:block hidden">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="py-[5px] px-5 transition-all uppercase hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="py-[5px] px-5 transition-all uppercase hover:text-primary"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="py-[5px] transition-all px-5 uppercase hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="py-[5px] transition-all px-5 uppercase hover:text-primary"
                >
                  Book Table
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link href="/auth/login">
            {" "}
            <FaUser className="cursor-pointer" />{" "}
          </Link>
          <Link href={"/cart"}>
            <span className="relative">
              <FaShoppingCart className="cursor-pointer" />
              <span className="px-[5px] text-[10px]   rounded-full bg-primary absolute -top-2 -right-3 text-black inline-flex items-center justify-center font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <IoMdSearch
            className="cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />

          <button
            type="button"
            className="md:inline-block hidden cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
          >
            {" "}
            Order Online
          </button>

          <RxHamburgerMenu
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
      {isModalOpen && <Search setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Header;
