import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';  // useRef와 useEffect를 import해서 사용

function App() {

  // 기존에 작성해둔 자바스크립트 코드 들고와보기 : 제이쿼리 - 프로그래스바
  // App.css에 프로그래스바 관련 css 추가 (기존에 작성해둔 코드 복사 붙여넣기)

  const progressbar = useRef(null);

  // window.addEventListener("DOMContentLoaded", function(){...}를 useEffect()로
  useEffect(()=>{
    window.addEventListener("scroll", function(){
      // useRef로 Dom 객체를 가져왔으므로 progressbar로 수정
      if( progressbar != null) {
        setProgress();
      }
    })
  }, []);  // useEffect - deps에 빈 배열 > 시작할 때 한 번만 실행

  function setProgress(){
    let curreY = document.documentElement.scrollTop;
    console.log(curreY);

    let totalY = document.documentElement.scrollHeight 
                  - document.documentElement.clientHeight;
    console.log(totalY);

    let percentage = (curreY/totalY)*100;
    document.querySelector(".progress").style.width= percentage+"%";
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/** 프로그래스 바 div */}
      {/** id="progressbar"를 삭제하고 ref 추가, class를 className으로 */}
      <div className="progressbar" ref={progressbar}>
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default App;
