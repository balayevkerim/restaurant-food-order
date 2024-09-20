import Product from "@/models/Product";
import dbConnect from "@/utils/dbConnect";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }
};

export default handler;
