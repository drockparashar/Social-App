import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { authoptions } from "../../../../../lib/authOptions";

const handler=NextAuth(authoptions)

export {handler as GET, handler as POST}