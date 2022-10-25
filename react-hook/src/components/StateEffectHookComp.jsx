// 함수형 컴포넌트

import { useEffect } from "react";
import { useState } from "react";

const StateEffectHookComp = () => {
  // useState : 클래스형 컴포넌트의 state처럼 사용할 수 있다.
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // useEffect : 클래스 컴포넌트의 라이프 사이클과 동일하게 사용할 수 있다.
  // componentWillMount()와 componentWillUpdate() 내용을 같이 가지고 있다.
  // 마운트 될 때와 업데이트 될 때 실행이 된다.
  useEffect(() => {
    console.log("이벤트훅이 실행되었습니다");
    // clean up 함수 : 언마운트 될 때 실행할 코드를 넣어줄 수 있다.
    // componentWillUnmount처럼 실행
    return (() => {
      console.log('종료되었습니다');
    })
  });  // 두 번째 인수 값을 넣지 않을 때, 모든 state와 props 값에 대해 실행

  // useEffect는 두번째 인수를 배열로 받아올 수 있다.
  // 두 번째 인수의 배열요소 : 업데이트 할 때 참고할 state나 props (의존값)
  // 두 번째 인수 [] : 빈 배열로 넣어주게 되면 시작할 때 한번만 실행
  useEffect(() => {
    setInterval(() => {setTime(new Date());}, 1000);
  }, []);

  // 특정한 state의 값이 바뀔때 실행하고 싶을 때 useEffect 사용
  useEffect(()=>{
    console.log(`카운트가 증가하였습니다`);
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={ ()=> {setCount(count+1)} }> +1 </button>
      <h2>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</h2>
    </div>
  );
}

export default StateEffectHookComp;