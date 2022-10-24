// 클래스형 컴포넌트
import { Component } from "react";

class MapCompTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['홍길동', '성춘향', 'Jhon'],
      inputName: ""
    }
    this.onchange = this.onchange.bind(this);
    this.getName = this.getName.bind(this);
    this.deleteName = this.deleteName.bind(this);
  }

  /** 바뀐 값을 가져오는 함수 */
  onchange(e) { 
    this.setState({inputName: e.target.value});
  }

  /** 배열에 값을 넣는 함수 - 데이터 추가 */
  getName() {
    // 버튼을 클릭했을 때, 흥부라는 이름이 고정적으로 추가
    // const newNames = this.state.names.concat('흥부');
    // this.state.names의 배열에 값이 추가 > 배열 메소드를 통해서 추가
    const newNames = this.state.names.concat(this.state.inputName);
    // setState를 통해서 state의 값이 바뀔 때 화면이 바뀐다.
    this.setState({names: newNames});
  }

  /** names을 클릭하면 삭제하는 함수 - 데이터 삭제 */
  deleteName(index) {
    // 이름값을 가져와서 state.names의 fillter를 통해서 이름을 제외하고 배열 만듦
    // const newNames = names.filter((n)=>(n!=name));
    const newNames = this.state.names.filter((n, i) => (i != index));
    this.setState({names: newNames});
  }

  render() { 
    const {names} = this.state;

    return (
      <div>
        <input type="text" onChange={this.onchange}/>
        <button onClick={this.getName}>이름 추가</button>
        {/** 리액트에서 table을 사용할 때 thead, tbody를 같이 사용 */}
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {
              names.map((names, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  {/** 이벤트 안에서 인수를 전달할 때에는 화살표함수로 감싸서 전달 */}
                  <td onClick={()=>{this.deleteName(index)}}>{names}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default MapCompTest;