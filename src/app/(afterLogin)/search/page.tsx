import style from './search.module.css';
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "./_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";

// 1. partial
// type SearchParams = {
//   q: string;
//   f: string;
//   pf: string;
// };

// type Props = {
//   searchParams: Partial<SearchParams>;
// }

//? q, f, pf는 검색과 탐색하기(tab)에서 사용할수 있으므로 부모 컴포넌트에서 Props로 미리 설정해둔다.
//옵셔널 체이닝 타입 가드
type Props = {
  searchParams: { q: string, f?: string, pf?: string };
};

export default function Search({ searchParams }: Props) {
  // console.log('searchParams', searchParams)
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton/>
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab/>
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  )
}