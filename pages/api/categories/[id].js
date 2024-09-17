import Category from "@/models/Category";
import dbConnect from "@/utils/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }
  if (method === "DELETE") {
    try {
      const category = await Category.findByIdAndDelete(id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }
};

export default handler;
