// 클래스형 컴포넌트

import { Component } from "react";

class StateComp extends Component {

  /*
  constructor를 통해서 클래스의 속성 관리
  props값은 Component에서 상속받아온 값, 명시적으로 값을 가져올 필요가 있다. > super(props)
  state는 자기자신의 값이므로 this를 붙인다. > this.state
  state는 객체 형식으로 값을 저장한다. 컴포넌트에서 사용하는 값을 작성한다.
  */
  // 자바스크립트 클래스의 constructor() {}
  constructor(props) {
    super(props);
    this.state = {
      number: 4,
      count: 0
    }
  }

  render() { 
    // state를 사용하지 않을 때, props의 값을 this를 통해서 사용
    const {name} = this.props;
    // state를 사용할 때, 비구조화 할당을 한 후 동일하게 사용
    const {number, count} = this.state;

    return (
      <div>
        <h1>{number}</h1>
        {/* setState를 이용하여 값 수정 */}
        <button onClick={() => {this.setState( {number: number + 1} )}}> 
          +1 
        </button>
        <button onClick={() => { this.setState( {number: 0} ) }}>
          0
        </button>
        <button onClick={() => {this.setState( {number: number - 1} )}}>
          -1
        </button>

        <h1>{count}</h1>
        <button onClick={() => {this.setState( {count: count + 1} )}}> 
          +1 
        </button>
        
      </div>
    );
  }

}

export default StateComp;