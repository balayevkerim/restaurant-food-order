import Product from "@/models/Product";
import dbConnect from "@/utils/dbConnect";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }

  if (method === "POST") {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }
};

export default handler;
