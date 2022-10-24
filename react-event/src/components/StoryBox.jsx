// 클래스형 컴포넌트

import { Component } from "react";
import StoryTitle from "./StoryTitle";        // 제목 컴포넌트 연결
import StoryDescript from "./StroyDescript";  // 본문 컴포넌트 연결
import './css/StoryBox.css';                  // css 연결

class StoryBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div className="story-box">
        <StoryTitle>제목입니다</StoryTitle>
        <StoryDescript visible={true}>본문 내용입니다 1</StoryDescript>
        <StoryDescript visible={false}>본문 내용입니다 2</StoryDescript>
      </div>
    );
  }
}

export default StoryBox;