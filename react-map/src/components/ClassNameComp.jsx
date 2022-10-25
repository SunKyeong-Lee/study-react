// 함수형 컴포넌트
import { useState } from "react";
import './css/ClassNameComp.css'

const ClassNameComp = () => {
  const [active, setActive] = useState({
    active: false,
    classList: "on",
  });

  return (
    <div>
      <button
        onClick={() => {
          if (active.classList === "on") {
            setActive({ classList: "off" });
          } else {
            setActive({ classList: "on" });
          }
        }}
      >
        activeToggle : classList
      </button>
      <button
        onClick={() => {
          if (active.active === false) {
            setActive({ active: true });
          } else {
            setActive({ active: false });
          }
        }}
      >
        activeToggle : active
      </button>
      
      <ul>
        <li className="on">활성화된 리스트입니다</li>
        <li className="off">비활성화된 리스트입니다</li>
        <li className={active.active ? "on" : "off"}>리스트입니다</li>
        <li className={active.classList}>리스트입니다</li>
      </ul>
    </div>
  );
};

export default ClassNameComp;
