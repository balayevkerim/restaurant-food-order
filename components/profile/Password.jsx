import React from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPasswordSchema";
import axios from "axios";
import { toast } from "react-toastify";

const Password = ({ user }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      toast.success("Password updated succesffuly!");
      actions.resetForm();
    } catch (err) {
      toast.error( err?.message || "Failed to fetch")
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <Title className="text-[40px]" title="Password" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button
        className="mt-4 inline-block  cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default Password;
