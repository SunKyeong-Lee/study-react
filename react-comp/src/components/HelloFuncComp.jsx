// 함수형 컴포넌트
// sfc : 함수형 컴포넌트 자동완성 (확장 프로그램)

// 화살표 함수로 만드는 컴포넌트
// 모듈로 내보내기 위해 HelloFuncComp에 담아서 내보낸다.
const HelloFuncComp = (props) => {

  // 비구조화 할당 문법을 통해 props의 내부 값을 추출하여 사용할 수 있다.
  // 비구조화 할당 : 객체나 배열의 값을 변수에 각각 할당
  const {name, address, children} = props;

  // return에 html을 작성하여 내보낸다.
  return (
    <div>
      <h1>함수형 컴포넌트 입니다</h1>
      <p>{name}입니다</p>
      <p>{address}에 거주하고 있습니다</p>
      {/* 
        props.children : 열린 태그와 닫힌 태그 사이의 값(props)
        <HelloFuncComp> 여기가 children </HelloFuncComp>

        {children}이 없다면 컴포넌트를 불러왔을 때 태그 사이의 내용이 보이지 않는다.
      */}
      <p>{children}</p>
    </div>
  );

}

export default HelloFuncComp;