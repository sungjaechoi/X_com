import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        {/* priority 속성 : 우선순위 => 페이지 로드시 우선적으로 로드되어야 함을 나타냄, ex) 페이지 상단 위치한 중요 이미지 */}
        <Image src={zLogo} alt="logo" priority/>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>로그인</Link>
      </div>
    </>
  )
}
