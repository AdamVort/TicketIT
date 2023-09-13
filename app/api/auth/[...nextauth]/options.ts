import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth";


export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const user = {id: '1', username:"test_name", last_name:'test_lastname'}
        if (user) {
          return user;
        }
        return null;

      },
    }),
  ]
};
