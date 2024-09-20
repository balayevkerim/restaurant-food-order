import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ message: "Error" });
    }
  }

  if (method === "PUT") {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.body.confirmPassword = await bcrypt.hash(
          req.body.confirmPassword,
          10
        );
      }
      const users = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(users);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  }
};

export default handler;
