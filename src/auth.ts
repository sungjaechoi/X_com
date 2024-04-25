import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST }, // API라우트
  auth, //* 사용자의 로그인 여부를 확인 하는 함수
  signIn, //* 로그인시 사용하는 함수
} = NextAuth({
    pages:{
      //auth가 제공 하는 페이지 ("/api/auth/signin")를 사용하지 않고 아래 페이지를 사용한다.
      signIn: '/i/flow/login',
      newUser: '/i/flow/signup'
    },
    //* 사용자 인증 제공 설정
    providers:[
      CredentialsProvider({
        async authorize(credentials) {
          const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          })
  
          if (!authResponse.ok) {
            return null
          }
  
          const user = await authResponse.json()
          console.log('user?', user);
          return {
            email: user.id,
            name: user.nickname,
            image: user.image,
            ...user,
          }
        },
      }),
    ]
  });