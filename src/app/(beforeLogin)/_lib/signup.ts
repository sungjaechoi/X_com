"use server";

import { redirect } from "next/navigation";

export default async function onSubmit(prevState: any, formData: FormData) {
  // formData 검증하고 메세지는 클라이언트 컴포넌트에서 보여준다.
  if (!formData.get("id")) {
    return { message: "no_id" };
  }
  if (!formData.get("name")) {
    return { message: "no_name" };
  }
  if (!formData.get("password")) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", // 이 속성이 있어야 쿠키 전달 가능
      }
    );

    // 중복 사용자 체크
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(response.status);
    console.log(await response.json())
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    shouldRedirect = false;
  }

  if (shouldRedirect) {
    redirect("/home"); // 리다이렉트는 try/catch문 안에 들어가면 안된다.
  }
}