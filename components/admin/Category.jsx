import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { toast } from "react-toastify";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );

        setCategories(res?.data);
      } catch (err) {
        toast.error(err?.message || "Failed to fetch");
      }
    };
    getCategories();
  }, []);

  const handleCreate = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      setCategories([...categories, res.data.category]);
      setInputText("");
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      toast.error(err?.message || "Failed to fetch");
    }
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]" title="Category" />
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="inline-block cursor-pointer border-none rounded-[45px] transition-all bg-primary text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
            onClick={handleCreate}
          >
            Add
          </button>
        </div>
        <div className="mt-10  max-h-[250px] overflow-auto pb-4">
          {!categories || categories.length == 0 ? (
            <div className="flex border-primary  border p-3 items-center justify-center">
              No Categories added yet
            </div>
          ) : (
            categories.map((category) => (
              <div className="flex justify-between mt-4" key={category._id}>
                <b className="text-xl">{category.title}</b>
                <button
                  className=" !bg-danger inline-block cursor-pointer border-none rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
                  onClick={(e) => handleDelete(e, category._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
