// 함수형 컴포넌트

import { useState } from "react";

const EventChangeFuncComp = () => {
  // set함수로 접근하기 위해서 하나의 useState에 객체로 생성
  const [message, setMessage] = useState({
    message: '',
    name: ''
  });

  // onchnage 메소드 만들어서 확인해보기
  // input 값이 바뀔 때마다 값을 state에 넣어주는 메소드
  const onchange = function(e) {
    const newName = {
      // ... 스프레드 연산자 : 객체나 배열의 값을 꺼내서 출력
      // 객체 형태 {키 : 값}
      // 객체의 속성 이름(키)을 변수로 가져오고 싶을 때 []로 감싸서 사용 > [변수]
      ...message,  // message: '', name: ''
      [e.target.name]: e.target.value
    }
    setMessage(newName);
  }

  // 입력 값을 초기화해주는 메소드
  const onReset = function() {
    setMessage( {
      message: '',
      name: ''
    } )
  }

  return (
    <div>
      {/* p태그에 input으로 작성한 내용 출력하기 */}
      <h1>글을 입력하세요</h1>
      <input 
        type="text" 
        name="message"
        // input 태그 안에 value 설정하기
        // 그래야 초기화 버튼을 클릭했을 때, input 태그 안의 상태도 같이 비워진다.
        value={message.message}
        onChange={
          (e) => {
            setMessage( {...message, message: e.target.value} )
          }
        }
      />
      <p>입력 값 : {message.message}</p>

      <h1>이름을 입력하세요</h1>
      <input 
        type="text" 
        name="name"
        // input태그 안에 value를 설정하지 않았기 때문에
        // 초기화 버튼을 누르면 <div>태그 안에 존재하는 {name}값은 비워지겠지만
        // input태그 안의 값은 비워지지 않아 입력한 input태그에 텍스트가 그대로 남아있다.
        onChange={onchange}
      />
      <p>입력 값 : {message.name}</p>

      <button onClick={onReset}>누르면 초기화 됩니다</button>
    </div>
  );
}

export default EventChangeFuncComp;