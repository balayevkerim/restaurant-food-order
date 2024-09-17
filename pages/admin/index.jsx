import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useRouter } from "next/router";
import axios from "axios";
import { adminSchema } from "@/schema/adminSchema";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      toast.success("Admin login succesful");
      actions.resetForm();
      push("/admin/profile");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Incorrect");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "username",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title className={"text-[40px] mb-6"} title={"Admin Login"} />
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button
            className="inline-block cursor-pointer border-none bg-primary rounded-[45px] transition-all text-white py-[0.5rem] px-7 hover:bg-[#e69c00]"
            type="submit"
          >
            LOGIN
          </button>

          <Link href="/">
            <span className="text-sm underline cursor-pointer text-secondary">
              Home Page
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
export default AdminLogin;
