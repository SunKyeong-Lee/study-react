// 함수형 컴포넌트

import { useState } from "react";

const EventFuncComp = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('흥부');

  // 함수 안에서 메소드를 작성하여 사용
  // 익명 함수 또는 화살표 함수로 작성해서 사용
  const numPlus = function() {
    setNum(num + 1);
  }

  const nameChange = () => {
    setName('놀부');
  }

  return ( 
    <div>
      <h1>{num}</h1>
      {/* 같은 함수 안에 있는 내용이므로 이름만 작성 */}
      <button onClick={numPlus}>
        +1
      </button>
      
      <h1>{name}</h1>
      <button onClick={nameChange}>
        이름이 바뀝니다
      </button>
    </div>
  );
}

export default EventFuncComp;
