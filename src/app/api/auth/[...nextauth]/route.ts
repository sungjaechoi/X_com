//? Next_Auth의 기본 인증경로는 /api/auth/... 이다.
//* 사용자 인증경로 커스터 마아징을 위해 NEXT catch-all 라우터로 /api/auth/모든 경로의 GET, POST를 처리한다.
export {GET, POST} from '@/auth'



