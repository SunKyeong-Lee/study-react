// 클래스형 컴포넌트

import { Component } from "react";

class EventChangeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      name: ''
    }
    this.onchange = this.onchange.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  // onchnage 메소드 만들어서 확인해보기
  // input 값이 바뀔 때마다 값을 state에 넣어주는 메소드
  onchange(e) {
    // 객체 형태 {키 : 값}
    // 객체의 속성 이름(키)을 변수로 가져오고 싶을 때 []로 감싸서 사용 > [변수]
    this.setState( { [e.target.name]: e.target.value } );
  }

  // 입력 값을 초기화해주는 메소드
  onReset() {
    this.setState( {
      message: '',
      name: ''
    } );
  }
  
  render() {
    return (
      <div>
        {/* p태그에 input으로 작성한 내용 출력하기 */}
        <h1>글을 입력하세요</h1>
        <input 
          type="text" 
          name="message"
          // input 태그 안에 value 설정하기
          // 그래야 초기화 버튼을 클릭했을 때, input 태그 안의 상태도 같이 비워진다.  
          value={this.state.message}
          onChange={ 
            (e) => {this.setState({message: e.target.value})} 
          }
        />
        <p>입력 값 : {this.state.message}</p>

        <h1>이름을 입력하세요</h1>
        <input 
          type="text" 
          name="name"
          // input태그 안에 value를 설정하지 않았기 때문에
          // 초기화 버튼을 누르면 <div>태그 안에 존재하는 {name}값은 비워지겠지만
          // input태그 안의 값은 비워지지 않아 입력한 input태그에 텍스트가 그대로 남아있다.
          onChange={this.onchange}
        />
        <p>입력 값 : {this.state.name}</p>

        <button onClick={this.onReset}>누르면 초기화 됩니다</button>
      </div>
    );
  }
}
 
export default EventChangeComp;