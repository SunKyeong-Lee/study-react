import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

const LoginComp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      {/* 로그인이 false일 때 로그인 창, true일 때 인사 창 */}
      {login ? (
        <h1>{name}님 반갑습니다</h1>
      ) : (
        <LoginFormComp setLogin={setLogin} setName={setName} />
      )}
    </div>
  );
};

export default LoginComp;
