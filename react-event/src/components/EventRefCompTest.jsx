// 클래스형 컴포넌트 ref 실습

import React, { Component } from "react";

class EventRefCompTest extends Component {
  constructor(props) {
    super(props);
    // ref 콜백 함수를 통해 ref 설정
    this.input = null;                // DOM을 저장할 변수
    this.setInput = (element) => {    // 콜백 함수를 통해서 DOM을 가져옴
      this.input = element;
    }
    this.changeBackground = () => {   // 콜백 함수로 가져온 요소에 접근해서 값 수정
      this.input.style.backgroundColor = 'yellowgreen';
    }

    // createRef를 통해서 가져온 DOM
    this.inputRef = React.createRef();
    this.changeRefBackground = () => {
      // createRef를 통해 들고오면 current에 담겨서 온다.
      this.inputRef.current.style.backgroundColor = 'wheat'
    }
  }

  render() { 
    return (
      <div>
        <h1>실습 : 콜백 함수를 통해 ref 설정</h1>
        <input type="text" ref={this.setInput} />
        <button onClick={this.changeBackground}>색을 바꿉니다</button>

        <h1>실습 : createRef를 통해 ref 설정</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.changeRefBackground}>색을 바꿉니다</button>
      </div>
    );
  }
}
 
export default EventRefCompTest;