import Header from "@/components/layout/Header";
import Head from "next/head";
import Home from "./home";
import axios from "axios";

export default function Index({categoryList,productList}) {
  return (
    <div>
        <Head>
          <title>Next App</title>
        </Head>
        <Home categoryList={categoryList} productList={productList}/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};