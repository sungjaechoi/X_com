"use client"

import style from '@/app/(afterLogin)/_component/trendSection.module.css';
import Trend from './Trend';
import { usePathname } from 'next/navigation';


export default function TrendSection () {
  // 현재 페이지 경로가 /explore 일때, 노출하지 않는다. - 나를 위한 트렌드는 탐색하기에 없음
  const pathname = usePathname();
  if (pathname === '/explore') return null;
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