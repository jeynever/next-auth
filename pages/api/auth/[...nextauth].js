import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("https://www.mecallapi.com/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.status == "ok") {
          return data.user;
        }
        return null;
      },
    }),
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  callbacks: {
    //เพิ่ม user ลงไป
    async jwt({ token, user, account }) {
      // ลง log user ดูว่ามาไหม
      // console.log(user);
      if (account) {
        token.accessToken = account.access_token;
        //เพิ่ม token.user = user;
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      //เพิ่ม session.user = token.user; เพื่อที่จะจะเรียกข้อมูลอื่นๆ
      session.user = token.user;
      return session;
    },
  },
});
