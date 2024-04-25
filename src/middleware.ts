//* auth와 middleware를 연결하여 auth가 export function, Middleware가 된다.
// import { auth as middleware } from "./auth"
import { auth } from "./auth"
import {NextResponse} from "next/server";

//* auth()함수를 호출해서 사용자가 로그인 했는지 확인후 로그인 하지 않았다면 로그인 페이지도 이동
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

//* 미들웨어가 적용될 path
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}