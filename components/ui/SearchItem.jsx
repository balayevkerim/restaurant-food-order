import Image from "next/image";

function SearchItem({imgPath, title, price}) {
  return (
    <div className="flex justify-between items-center text-black">
      <div className="h-[50px] w-[50px] relative">
        <Image src={imgPath} layout="fill" alt="test" />
      </div>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
}

export default SearchItem;
