import Category from "@/models/Category";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  if (method === "POST") {
    try {
      const { title } = req.body;

      const newCategory = await Category.create({ title });
      res.status(201).json({ status: true, category: newCategory });
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }
  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }
};

export default handler;
