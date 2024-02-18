import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
console.log(process.env.GITHUB_SECRET);
console.log(process.env.GITHUB_ID);

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  jwt: {},

  pages: {
  },

  callbacks: {

  },

  events: {},

  debug: false,
});
