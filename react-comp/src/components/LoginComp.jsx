// 클래스형 컴포넌트
// props의 값을 login과 name을 받아와서
// login이 true일 때 '로그인이 성공하였습니다. name입니다' 출력
// 아닐 때 '로그인이 필요합니다'를 출력하는 컴포넌트

import { Component } from "react";

class LoginComp extends Component {
  
  render() { 
    const {name, login} = this.props;
    return (
      <div>
        { login=="true" ? (
          <div>
            <h1>로그인에 성공하였습니다</h1>
            <p>{name}입니다</p>
          </div>
        ) : (
          <div>
            <h1>로그인이 필요합니다</h1>
            <p>리액트를 시작하였습니다</p>
          </div>
        ) }
      </div>
    );
  }

}

export default LoginComp;