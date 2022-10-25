// 함수형 컴포넌트

import { useReducer } from "react";
import MemoComp from "./MemoComp";
import ReducerCountComp from "./ReducerCountComp";

// 현재 상태(state)와 액션 객체(action)를 파라미터로 받아와서 
// 새로운 상태를 반환해주는 함수
// reducer에서 반환하는 상태는 컴포넌트가 지닐 새로운 상태
function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      // state 안에 여러 개의 값이 있을 때, 이전 값을 유지해주어야 한다.
      // 이전 값을 유지하기 위해 ...state를 추가
      return {...state, count: state.count+1};
    case 'decrement':
      return {...state, count: state.count-1};
    case 'zero':
      return {...state, count: 0};
    case 'changeInput':
      return {...state, input: action.payload}
  }
}

const initialState = {
  count: 0,
  input: "여기에 입력값이 나타납니다"
}

const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => { dispatch({type: 'decrement'}) }}>
        -1
      </button>
      <button onClick={() => { dispatch({type: 'zero'}) }}>
        0
      </button>
      <button onClick={() => { dispatch({type: 'increment'}) }}>
        +1
      </button>

      {/* 자식 컴포넌트에 props 값으로 state와 dispatch를 전달할 수 있다. */}
      <ReducerCountComp state={state} dispatch={dispatch}/>

      {/*
        자식 컴포넌트 MemoComp를 하나 만들고 
        ReducerComp의 state에 input="" 추가하고, reducer를 작성하여
        MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나올 수 있게 하기
      */}
      <h1>{state.input}</h1>
      {/** 먼저 ReducerComp에서 실행해보기, e객체의 값을 어떻게 가져갈지 생각하기 */}
      <input 
        type="text" 
        placeholder="부모 컴포넌트에서의 input"
        // setState(e.target.value) >> dispatch에서 쓸수있도록
        onChange={(e) => { dispatch({
          type: 'changeInput',
          payload: e.target.value
        }) }}
      />
      <MemoComp dispatch={dispatch} />
    </div>
  );
}

export default ReducerComp;