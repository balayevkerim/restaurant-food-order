import Order from "@/models/Order";
import dbConnect from "@/utils/dbConnect";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }

  if (method === "POST") {
    try {
      const newOrder = await Order.create(req.body);
      res.status(201).json(newOrder);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }
};

export default handler;
