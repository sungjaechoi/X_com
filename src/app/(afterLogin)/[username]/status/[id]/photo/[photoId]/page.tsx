import Home from "@/app/(afterLogin)/home/page";
import { useSearchParams } from 'next/navigation';

type Props = {
  //!page.tsx에서 params를 사용할수 있음.
  //params를 쓰면 슬러그들의 값을 params로 받아올수 있다.
  params: { username: string, id: string, photoId: string },
}
export default function Page({ params}: Props) {
  // console.group([
  //   'username',
  //   params.username, // elonmusk
  //   'id',
  //   params.id, // 1
  //   'photoId',
  //   params.photoId // 1
  // ])
  
  params.username // elonmusk
  params.id // 1
  params.photoId // 1
  return (
    <Home />
  )
}