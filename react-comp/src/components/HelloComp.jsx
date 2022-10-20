// 클래스형 컴포넌트
// ccc : 클래스형 컴포넌트 자동완성 (확장 프로그램)

// react에서 component를 받아와서 상속
import { Component } from "react";

class HelloComp extends Component {

  // 클래스형 컴포넌트에서는 함수 대신 render()를 통해 내보낸다.
  render() { 

    // 클래스에서 props 값을 가져올 때는 this.props를 통해서 들고온다.
    console.log(this.props);  // object(객체)

    // 비구조화 할당 문법을 통해 props의 내부 값을 추출하여 사용할 수 있다.
    // 비구조화 할당 : 객체나 배열의 값을 변수에 각각 할당
    const {name, address, num, children} = this.props;

    return (
      <div>
        <h1>클래스형 컴포넌트 입니다</h1>
        <p>{name}님 안녕하세요</p>
        <p>{address}에 살고계시군요</p>
        <p>{num} + 10 = {num+10}</p>
        {/* 
          props.children : 열린 태그와 닫힌 태그 사이의 값(props)
          <HelloComp> 여기가 children </HelloComp>

          {children}이 없다면 컴포넌트를 불러왔을 때 태그 사이의 내용이 보이지 않는다.
        */}
        <p>{children}</p>
      </div>
    );
    
  }

}

export default HelloComp;