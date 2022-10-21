// 클래스형 컴포넌트

import React, { Component } from "react";

class EventRefComp extends Component {
  constructor(props) {
    super(props);
    // 1. 콜백 함수를 통한 ref 설정
    // DOM을 저장할 변수 만들기 : input 엘리먼트가 들어갈 공간을 선언
    this.textInput = null;
    // ref 콜백 함수를 통해서 DOM을 가져옴
    this.setTextInputRef = (element) => {
      this.textInput = element;
      console.dir(this.textInput);   // 값이 들어갔는지 콘솔로 확인 (input)
      this.textInput.value = "안녕"  // 값 변경
    }
    this.changeData = this.changeData.bind(this);

    // 2. createRef를 통한 설정
    // React를 import하여 사용 > import React, { Component } from "react";
    // React.createRef를 통해 DOM 접근하기
    this.myRef = React.createRef();
    // 화살표 함수를 사용하면 bind를 사용할 필요가 없다.
    this.changeRefData = () => {
      // createRef를 통해 들고오면 current에 담겨서 온다.
      console.log(this.myRef);
      this.myRef.current.focus();
      this.myRef.current.style.backgroundColor = 'cornflowerblue';
    }
  }

  // ref 콜백 함수로 가져온 엘리먼트(textInput)에 접근해서 값 수정
  changeData() {
    // ref 콜백 함수를 통해 가져온 DOM 객체는
    // 자바스크립에서 id를 통해 가져온 것과 동일하게 사용할 수 있다.
    this.textInput.focus();
    this.textInput.style.backgroundColor = 'tomato';
  }

  render() { 
    return (
      <div>
        <h1>콜백 함수를 통한 ref 설정</h1>
        {/* ref를 통해서 input 엘리먼트 전달 */}
        <input type="text" ref={this.setTextInputRef}/>
        <button onClick={this.changeData}> 이벤트 버튼 </button>
        <p>버튼을 누르면 input 엘리먼트에 포커스되고, 배경색이 바뀝니다</p>

        <h1>createRef를 통한 설정</h1>
        {/* ref를 통해서 input 엘리먼트 전달 */}
        <input type="text" ref={this.myRef}/>
        <button onClick={this.changeRefData}> 이벤트 버튼 </button>
        <p>버튼을 누르면 input 엘리먼트에 포커스되고, 배경색이 바뀝니다</p>
      </div>
    );
  }
}
 
export default EventRefComp;