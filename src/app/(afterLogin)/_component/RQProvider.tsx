'use client'
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  // useState를 사용하여 QueryClient 인스턴스를 생성하고 상태로 관리
  // QueryClient 인스턴스 React Query의 설정을 초기화하고 캐싱 및 리페칭 동작을 관리
  const [client] = useState(
    new QueryClient({
      defaultOptions: {  // React Query의 전역 설정을 정의
        queries: {
          refetchOnWindowFocus: false,  // 윈도우 포커스 시 자동 새로고침을 비활성화
          retryOnMount: true,           // 마운트 시 재시도 활성화
          refetchOnReconnect: false,    // 네트워크 재연결 시 자동 새로고침을 비활성화
          retry: false,                 // 실패한 쿼리의 재시도를 비활성화
        },
      },
    })
  );

  // QueryClientProvider로 전체 자식 컴포넌트를 감싸서, QueryClient 인스턴스를 애플리케이션에 제공
  // ReactQueryDevtools는 개발 도구를 추가
  // initialIsOpen은 환경 변수에 따라 Devtools의 초기 상태를 제어
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}/>
    </QueryClientProvider>
  );
}


export default RQProvider;