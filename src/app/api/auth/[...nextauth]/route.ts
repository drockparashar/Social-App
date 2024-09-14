import NextAuth from "next-auth/next";
import { authoptions } from "../../../../../lib/authOptions";

const handler=NextAuth(authoptions)

export {handler as GET, handler as POST}