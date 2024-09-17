import Image from "next/image";
import { useRouter } from "next/router";
import { MdFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import { useEffect, useState } from "react";
import Products from "@/components/admin/Products";
import Category from "@/components/admin/Category";
import Order from "@/components/admin/Order";
import Footer from "@/components/admin/Footer";
import { signOut } from "next-auth/react";

const Profile = ({ user }) => {
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  /*   useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);
 */
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src={"/images/admin.png"}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`flex justify-center items-center gap-2 border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <MdFastfood />
            <button className="ml-1 ">Products</button>
          </li>
          <li
            className={` flex justify-center items-center gap-2 border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaKey />
            <button className="ml-1">Categories</button>
          </li>
          <li
            className={` flex justify-center items-center gap-2 border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <MdDeliveryDining />
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={` flex justify-center items-center gap-2 border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <MdDeliveryDining />
            <button className="ml-1">Footer</button>
          </li>
          <li
            className={`border border-t-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Category />}
      {tabs === 2 && <Order />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
export default Profile;
