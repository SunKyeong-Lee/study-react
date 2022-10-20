// 함수형 컴포넌트

// 리액트 16.8버전 이후로 추가된 내용
// react에서 useState를 가져와서 사용한다.
import { useState } from "react";

const StatefuncComp = () => {

  // 비구조화 할당으로 사용
  // 첫번째 배열의 값 : 현재 상태 (message)
  // 두번째 배열의 값 : 상태를 바꾸어주는 함수 (setMessage)
  // message의 값은 useState()의 값으로 할당 (message = '메세지입니다')
  const [message, setMessage] = useState('메세지입니다');

  // 값을 할당 받아올 때, 이름은 원하는 이름으로 작성하면 된다.
  const [name, setName] = useState('홍길동');
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>{message}</h1>
      {/* setMessage 메소드를 통해서 message의 값을 수정 */}
      {/* 클래스형 함수에서 setState의 역할 */}
      <button onClick={ () => setMessage('글자를 수정하였습니다') }>
        메세지 수정
      </button>

      <h1>{name}</h1>
      <button onClick={ () => setName('성춘향') }>
        이름 수정
      </button>
    </div>
  );
}

export default StatefuncComp;