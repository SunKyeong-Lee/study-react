// 클래스형 컴포넌트 
// 라이프 사이클

import { Component } from "react";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '라이프 사이클',
      time: new Date()
    }
  }

  // 클래스 안에 있는 속성(변수) > this를 통해서 접근
  id = 0;
  count = 0;

  // 컴포넌트의 실행시기에 따라서 라이프사이클 메소드를 사용할 수 있다.
  componentDidMount() {
    console.log('마운트하였습니다');
    // 1초마다 함수를 실행하는 타이머함수 실행
    this.id = setInterval(
      () => {this.setState( {time: new Date()} )},
      1000
    );
    
  }
  componentDidUpdate() {
    console.log('업데이트하였습니다');
  }
  componentWillUnmount() {
    console.log('언마운트하였습니다');
  }

  render() { 
    const {time} = this.state;

    return (
      <div>
        <h1>라이프 사이클</h1>
        <h3 
          onClick={()=>{
            // setState가 실행이되면 라이프 사이클 업데이트 메소드가 실행 (state값이 바뀌었기 때문)
            // 화면에 내용이 출련된다.
            this.setState({title: '라이프 사이클 중 업데이트'})
          }}
        >
          클릭하면 바뀝니다 : {this.state.title}
        </h3>

        <p>
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </p>

        {/** state의 값이 아닌 변수로  사용된 내용은 업데이트 메소드를 실행하지 않는다. */}
        {/** 즉, 화면이 바뀌지 않는다. 그러나 그 안에 있는 데이터는 계속 바뀌고 있다. */}
        <button onClick={()=>{this.count++}}> {this.count} </button>
      </div>
    );
  }
}
 
export default LifeCycleComp;