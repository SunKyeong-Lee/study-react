// 함수형 컴포넌트

import { useState } from "react";

const ClassNameComp = () => {
  const [active, setActive] = useState({
    active: false,
    classList: 'on'
  });
  
  return (
    <div>
      <button
        onClick={() => {

        }}
      >
        activeToggle
      </button>
    </div>
  );
}
 
export default ClassNameComp;