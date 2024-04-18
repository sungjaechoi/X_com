import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

//이렇게 하면 서비스 작업자가 지정된 요청 처리기로 구성됩니다.
const worker = setupWorker(...handlers);

export default worker;