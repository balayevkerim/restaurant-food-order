import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { loginSchema } from "@/schema/loginSchema";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
const Login = () => {
  const { push } = useRouter();
  const { data: session } = useSession();

  const [currentUser, setCurrentUser] = useState();
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      if (!res.ok) {
        throw new Error(res.error);
      }
      toast.success("Login successful");
      actions.resetForm();
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && push("/profile/" + currentUser?._id);
      } catch (err) {
        toast.error( err?.message || "Failed to fetch")
      }
    };
    getUser();
  }, [session, push, currentUser]);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
        <Title className={"text-[40px] mb-6"} title={"Login"} />
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
          <button
            className="inline-block cursor-pointer border-none  rounded-[45px] transition-all py-[0.5rem] px-7 hover:bg-[#e69c00] !bg-secondary text-white"
            type="button"
            onClick={() => signIn("github")}
          >
            <i className="fa fa-github mr-2 text-lg "></i>
            GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-secondary">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);
  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Login;
