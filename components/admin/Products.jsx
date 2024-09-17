import Title from "../ui/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    /*  try {
      if (confirm("Are you sure you want to delete this product?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status === 200) {
          toast.success("Product Deleted!");
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    } */
  };

  /*  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); */

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]" title="Products" />
      <div className="overflow-auto max-h-[400px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="transition-all bg-secondary border-gray-700 hover:bg-primary"
            >
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                <Image
                  src={"/images/pizza1.png"}
                  alt={"Pizza"}
                  width={50}
                  height={50}
                />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                1...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button
                  className="inline-block cursor-pointer border-none  rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00] !bg-danger"
                  onClick={() => handleDelete(1)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
