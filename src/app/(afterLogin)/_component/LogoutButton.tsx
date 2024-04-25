"use client"

import style from "./logoutButton.module.css";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  //? useSession의 data만 구조분해 할당으로 추출하여 data의 속성의 이름을 "me"로 재 명명
  const { data: me } = useSession();

  // const me = { // 임시로 내 정보
  //   id: 'zerohch0',
  //   nickname: '제로초',
  //   image: '/5Udwvqim.jpg',
  // }

  const onLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        router.replace('/');
      });
  };

  // 내정보가 없을시 로그아웃 미 노출
  if (!me?.user) {
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string}/>
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}