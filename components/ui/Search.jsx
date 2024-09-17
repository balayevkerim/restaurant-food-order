import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import SearchItem from "./SearchItem";
import { MdCancel } from "react-icons/md";

function Search({ setIsModalOpen }) {
  return (
    <div className="modal-overlay z-10">
      <OutsideClickHandler onOutsideClick={() => setIsModalOpen(false)}>
        <div className="modal-content p-5 bg-white md:w-[600px] h-[600px] w-[350px] z-3 ">
            <MdCancel  color="black" className="absolute right-3 top-3 cursor-pointer text-2xl" onClick={()=>setIsModalOpen(false)}/>
          <Title
            title="Search"
            className=" py-3 font-dancing font-bold text-center text-black text-3xl"
          />
            <input
              type="text"
              placeholder="Search..."
              className=" flex items-center justify-center py-3 border border-primary w-full outline-[#e69c00] text-black"
            />

          <div className="flex flex-col gap-3 pt-3">
            <SearchItem
              imgPath="/images/burger1.jpg"
              title="Pizza 1"
              price="$10"
            />
            <SearchItem
              imgPath="/images/burger1.jpg"
              title="Pizza 1"
              price="$10"
            />
            <SearchItem
              imgPath="/images/burger1.jpg"
              title="Pizza 1"
              price="$10"
            />
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search;
