import Title from "@/components/ui/Title";
import { reset } from "@/redux/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(reset());
  };
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <div className="max-h-52 overflow-auto w-full">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    PRODUCT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    EXTRAS
                  </th>
                  <th scope="col" className="py-3 px-6">
                    PRICE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    QUANTITY
                  </th>
                </tr>
              </thead>
              <tbody>
                {!cart.products && (
                  <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      Cart is empty
                    </td>
                  </tr>
                )}
                {cart.products &&
                  cart.products.map((product) => (
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                        <Image
                          src={"/images/pizza1.png"}
                          alt=""
                          width={50}
                          height={50}
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.extras?.length > 0
                          ? product.extras.map((item) => (
                              <span key={item.id}>{item.name}, </span>
                            ))
                          : "empty"}
                      </td>

                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        $ {product.price}
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        {product.quantity}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full   md:text-start !text-center">
          <Title className={"text-[40px]"} title={"CART TOTAL"} />

          <div className="mt-6">
            <b>Subtotal: </b>$ {cart.total} <br />
            <b className=" inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$ {cart.total}
          </div>

          <div>
            <button
              onClick={checkout}
              type="button"
              className="inline-block  mt-4 md:w-auto w-5 cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
            >
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
