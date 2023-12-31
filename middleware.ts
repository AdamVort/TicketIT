import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req }) => {
      const pathname = req.nextUrl.pathname;

      if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
        return true;
      }

      return false;
    },
  },
  pages: {
    signIn: '/login',
  },
});