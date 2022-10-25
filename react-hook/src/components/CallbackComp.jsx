// 함수형 컴포넌트

import { useCallback } from "react";
import { useState } from "react";

const CallbackComp = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // 함수는 컴포넌트가 리렌더링 될 때마다 새로 생성하여 사용
  const doubleCount = () => {
    console.log("doubleCount");
    setNum(num * 2);
  };

  // useCallback : 함수를 기록해서 계속 쓰는 hook
  // [] 두 번째 인자 : 두 번째 인자의 값이 바뀔 때만, 함수를 새로 생성해서 사용

  // 익명함수의 특징 : 한 번만 쓰고 사라진다.
  // function 함수이름() {} , const 함수이름 = ()=>{}
  // : 함수이름을 통해 여러번 꺼내 쓸 수 있다.
  const changeName = useCallback(() => {
    console.log("name")
    setName("홍길동");
  }, []);

  // [] 안의 인자 값이 바뀔 때, 안에 콜백함수가 새로 만들어져서 사용될 수 있다.
  const onchange = useCallback((e) => {
    console.log("count");
    setName(e.target.value);
    setCount(count+1);
  }, [count]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={doubleCount}> num *2 </button>

      <br /><br />

      <input type="text" onChange={onchange}/>
      <button onClick={changeName}> 이름 : {name} </button>
      <p>이름 : {name}</p>
    </div>
  );
};

export default CallbackComp;
