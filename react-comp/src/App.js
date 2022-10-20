import "./App.css";
import EventComp from "./components/EventComp";
import EventFuncComp from "./components/EventFuncComp";
import HelloComp from "./components/HelloComp";
import HelloFuncComp from "./components/HelloFuncComp";
import LoginComp from "./components/LoginComp";
import LoginFuncComp from "./components/LoginFuncComp";
import StateComp from "./components/StateComp";
import StatefuncComp from "./components/StateFuncComp";

function App() {
  
  return (
    <div className="App">
      {/* 
        props는 properties의 줄임말
        어떠한 값을 컴포넌트에게 전달해줘야 할 때, 속성명=값 으로 전달
        값은 "" 안에 들어가면 문자열로 전달
        {} 안에 들어가면 자바스크립트의 자료형태로 전달
      */}
      <HelloComp name="홍길동" address="부산" num={1}>
        반갑습니다
      </HelloComp>
      <HelloFuncComp name="성춘향" address="서울">
        안녕하세요
      </HelloFuncComp>

      {/* props은 컴포넌트를 사용할 때 작성, html 요소의 속성과 동일 */}
      <LoginComp name="홍길동" login="true" />  {/* string */} 
      {/* JSX 언어이므로 {}를 통해서 자바스크립트를 쓸 수 있다. */}
      <LoginFuncComp login={true}/>  {/* boolean */}

      <StateComp />
      <StatefuncComp />

      <br />
      <EventComp />
      <EventFuncComp />
    </div>
  );

}

export default App;
