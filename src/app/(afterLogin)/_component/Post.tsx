import style from './post.module.css';
import Link from "next/link";
import dayjs from 'dayjs';
//? 상대시간 : 현재 시간 대비 지난 시간 표기
//dayjs 상대시간 - fromNow 사용 할수 있는 플러그인 - 몇시간 전 노출 여부
import relativeTime from 'dayjs/plugin/relativeTime';
//dayjs 한글 플러그인
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
//? 더미데이터 넣어주는 라이브러리
import {faker} from '@faker-js/faker';
import PostImages from './PostImages';
import { Post } from '@/model/Post';
// import PostImages from "@/app/(afterLogin)/_component/PostImages";

//dayjs 한글 플러그인
dayjs.locale('ko');

//dayjs.extend 함수에  import한 사용할 플러그인을 인자로 넣어 사용
// 현재는 상대시간(relativeTime)문자열 반환  
dayjs.extend(relativeTime)

type Props = {
  noImage?: boolean
  post: Post
}

export default function Post({ noImage, post }: Props) {
  // const target = { //서버에서 가져올 데이터, 일단 더미 데이터로?
  //   postId: 1,
  //   User: {
  //     id: 'elonmusk',
  //     nickname: 'Elon Musk',
  //     image: '/yRsRRjGO.jpg',
  //   },
  //   content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
  //   //현재 날짜와 시간이 저장된 Date 객체 반환
  //   createdAt: new Date(),
  //   Images: [] as any[],
  // }

  const target = post;
  //? noImage의 type이 boolean으로 되어있고 옵셔널이 이기 때문에 noImage가 없는경우 undefined이며
  //? undefined의 falsy한 값이기 때문에 '!noImage'=== !undefined 와 같고 true가 된다.
  // if (Math.random() > 0.5 && !noImage) { 
  //   target.Images.push(
  //     {imageId: 1, link: faker.image.urlLoremFlickr()},
  //     {imageId: 2, link: faker.image.urlLoremFlickr()},
  //     {imageId: 3, link: faker.image.urlLoremFlickr()},
  //     {imageId: 4, link: faker.image.urlLoremFlickr()},
  //   )
  // }
  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  )
}