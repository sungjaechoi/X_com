"use client"

import style from '@/app/(afterLogin)/_component/trendSection.module.css';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function TrendSection () {
  // 현재 페이지 경로가 /explore 일때, 노출하지 않는다. - 나를 위한 트렌드는 탐색하기에 없음
  const pathname = usePathname();
  const {data} = useSession();
  if (pathname === '/explore') return null;
  if (data?.user){
    return(
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    )
  }
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
          <h3>트렌드를 가져올수 없습니다.</h3>
      </div>
    </div>
  )
}