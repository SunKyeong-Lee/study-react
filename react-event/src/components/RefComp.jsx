// 함수형 컴포넌트

// React, useState, useRef를 import하여 사용
import React, { useState, useRef } from "react";

const RefComp = () => {
  // set함수로 접근하기 위해서 하나의 useState에 객체로 생성
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  // 사용하는 방식은 클래스 컴포넌트의 React.createRef와 동일
  // 요소를 DOM 객체로 가져와 사용 (current에 담겨서 온다.)
  const inputRef = useRef();
  // 비구조화 할당을 통해 값 추출
  const {name, nickname} = inputs;

  /** input 입력 값을 state에 넣어주는 메소드 */
  const onchange = (e) => {
    const {value, name} = e.target;  // e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs,      // 기존의 input 객체를 복사한 뒤
      [name] : value  // name 키를 가진 값을 value 로 설정
    });
  }

  /** 입력 값을 초기화해주는 메소드 */
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    inputRef.current.focus();  // 버튼을 누르면 가져온 input 요소에 포커스
  }

  return (
    <div>
      <h1>함수형 컴포넌트 - useRef</h1>
      {/* ref를 통해서 input 요소 전달 */}
      <input 
        type="text" 
        placeholder="이름을 입력하세요"
        name="name"
        value={name}
        onChange={onchange}
        ref={inputRef}
      />
      <input 
        type="text" 
        placeholder="닉네임을 입력하세요"
        name="nickname"
        value={nickname}
        onChange={onchange}
      />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>

      <button onClick={onReset}>초기화 버튼</button>
    </div>
  );
}

export default RefComp;