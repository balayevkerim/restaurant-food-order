import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../ui/Title";

const Order = () => {
//   const [orders, setOrders] = useState([]);
  const status = ["preparing", "on the way", "delivered"];
 /*  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
 */
  const handleStatus = async (id) => {
  /*   const item = orders.find((order) => order._id === id);
    const currentStatus = item.status;
 */
    /* try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
      setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
    } catch (err) {
      console.log(err);
    } */
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]" title="Products" />
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT ID
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
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
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                      1...
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      Kerim
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      $ 10
                    </td>

                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {status[0]}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      <button
                        className="!bg-success inline-block cursor-pointer border-none  rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
                        onClick={() => handleStatus(1)}
                      >
                        Next Stage
                      </button>
                    </td>
                  </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
