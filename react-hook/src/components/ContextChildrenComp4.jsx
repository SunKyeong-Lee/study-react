import { useContext } from "react";
import { NumContext } from "./ContextComp2";  // 사용할 context 가져오기

const ContextChildrenComp4 = () => {
  const {num, setNum} = useContext(NumContext);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => { setNum(num * 2) }}>
        num * 2
      </button>
    </div>
  );
}
 
export default ContextChildrenComp4;