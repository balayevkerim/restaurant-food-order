import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { toast } from "react-toastify";
const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }

  if (method === "POST") {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
      res.status(400).json({ message: err.message || "Something went wrong" });
    }
  }
};

export default handler;
