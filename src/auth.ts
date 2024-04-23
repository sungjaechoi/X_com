import NextAuth from "next-auth"

export const {
  handlers: { GET, POST }, // API라우트
  auth, //로그인을 확인 하는 함수
  signIn, // 로그인 할때 사용하는 함수
} = NextAuth({
  });