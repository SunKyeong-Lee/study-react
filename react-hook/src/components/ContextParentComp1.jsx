// 부모 컴포넌트가 되어서 context를 통해서 value 전달
// value 값에 state와 dispatch를 전달 (객체 형태) - useReducer 사용
// NumContext를 통해서 num 값과 setNum 전달하기 - useState 사용

import { useReducer, useState } from "react";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import ContextChildrenComp4 from "./ContextChildrenComp4";
import { CountContext, NumContext } from "./ContextComp2";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}


const ContextParentComp1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [num, setNum] = useState(1);

  return (
    <div>
      <CountContext.Provider value={{state: state, dispatch:dispatch}}>
        <ContextChildrenComp3 />
      </CountContext.Provider>
      <NumContext.Provider value={{num: num, setNum: setNum}}>
        <ContextChildrenComp4 />
      </NumContext.Provider>
    </div>
  );
};

export default ContextParentComp1;
