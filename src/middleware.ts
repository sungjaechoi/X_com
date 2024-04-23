//* auth와 middleware를 연결하여 auth가 export function, Middleware가 된다.
import { auth as middleware } from "./auth"


export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}