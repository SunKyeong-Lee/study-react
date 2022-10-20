// 클래스형 컴포넌트

import { Component } from "react";

class EventComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      message: '메세지 입니다',
      num: 1
    }
    // handleClick에서 this가 작동하려면 bind로 연결해줘야 한다.
    this.handleClick = this.handleClick.bind(this);
    this.numDouble = this.numDouble.bind(this);
  }

  // 메소드로만 사용하면 this의 위치를 찾지못해서 오류 발생 > this를 bind로 연결
  handleClick() {
    // 실행하는 공간이 바뀌어서 값을 가져오는 곳이 바뀜
    // render() : render 안에서 가져온 this.state
    // 메소드 : constructor에서 가져온 this.state
    this.setState( {isToggleOn: !this.state.isToggleOn} )
    console.log(this.state.message); 
  }

  // 화살표 함수로 사용할 경우
  // 화살표 함수는 this가 없으므로, 
  // this를 사용하면 화살표 함수를 호출한 곳의 this를 출력한다.
  onClickEvent = () => {
    this.setState( () => ({message: '내용이 바뀌었습니다'}) );
    console.log(this.state.message);
  }

  // 값을 두 배로 만들어주는 함수(메소드)
  numDouble() {
    this.setState( {num: this.state.num*2} )
  }

  render() { 
    const {isToggleOn, message, num} = this.state;
    
    return (
      <div>
        <button onClick={this.handleClick}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>

        <h1>{message}</h1>
        <button onClick={this.onClickEvent}>
          클릭하면 메세지가 바뀝니다
        </button>

        <h1>{num}</h1>
        <button onClick={this.numDouble}>
          숫자가 두 배로 증가합니다
        </button>
      </div>
    );
  }
}

export default EventComp;