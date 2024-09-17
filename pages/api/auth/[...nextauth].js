import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../utils/db";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
dbConnect();
export const authOptions = {
  // Configure one or more authentication providers
  //   adapter: MongoDBAdapter(client),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    Credentials({
      credentials: {
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You haven't registered yet!");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database: process.env.MONGODB_URI,
  secret: "secret",
};
const signInUser = async ({ user, password }) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password!");
  }
  return user;
};
export default NextAuth(authOptions);
