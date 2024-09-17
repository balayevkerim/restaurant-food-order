import Image from "next/image";
import React from "react";
import Title from "./Title";

const CampaignItem = ({ title, image, description }) => {
  return (
    <div className="bg-secondary p-10 flex flex-1 gap-3 rounded-md w-full flex-wrap">
      <div className="relative w-40 h-40 ">
        <Image
          src="/images/c1.jpg"
          alt=""
          layout="fill"
          className="rounded-full border-primary  border-[5px] hover:scale-105 transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white flex flex-col gap-3 px-5">
        <Title title={"Tasty Thursdays"} className={"text-2xl"} />
        <Title title={"20% Off"} className={"text-3xl"} />
        <button
          type="button"
          className="cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
        >
          {" "}
          Order Online
        </button>
      </div>
    </div>
  );
};
const Campaigns = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto py-[80px] px-3 gap-4">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
