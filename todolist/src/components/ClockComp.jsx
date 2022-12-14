// 함수형 컴포넌트 - 시간 출력

import { useMemo, useEffect, useState } from "react";

const ClockComp = () => {
  const [time, setTime] = useState(new Date());

  // 1초마다 반복하기 위한 타이머 함수
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // useMemo : 지정한 state 값이 바뀌지 않는다면, 이전의 return 값을 그대로 사용
  const hours = useMemo(() => {
    let stringHour = String(time.getHours());
    return stringHour.padStart(2, "0");
  }, [time]);
  const minutes = useMemo(() => {
    let stringHour = String(time.getMinutes());
    return stringHour.padStart(2, "0");
  }, [time]);
  const seconds = useMemo(() => {
    let stringHour = String(time.getSeconds());
    return stringHour.padStart(2, "0");
  }, [time]);

  return (
    <div>
      <h1>
        {hours} : {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default ClockComp;
