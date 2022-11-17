// css 파일이 여러개 적용되어 있는 상태라면
// 가장 뒤에 있는 파일의 css 속성이 우선 적용
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";   // 부트스트랩 css
import { Button, Stack } from "react-bootstrap";
import NavbarComp from "./components/NavbarComp";
import Layout from "./components/Layout";
import CardComp from "./components/CardComp";
import SlickComp from "./components/SlickComp";  // 슬릭
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  // 폰트어썸
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as cleanHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <CardComp />

      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary" onClick={() => {alert("버튼을 클릭했습니다");}}>
          Button as link
        </Button>
        <Button variant="secondary">
          <FontAwesomeIcon icon={faStar} />
        </Button>
        <Button variant="success">
          <FontAwesomeIcon icon={cleanHeart} />
        </Button>
        <Button variant="success">
          <FontAwesomeIcon icon={fullHeart} />
        </Button>
      </Stack>

      <Layout />
      
      <SlickComp />
    </div>
  );
}

export default App;
