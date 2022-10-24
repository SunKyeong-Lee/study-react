// 클래스형 컴포넌트
// 컨텐츠 제목에 오늘 날짜(월.일)를 추가

import { Component } from "react";

class StoryTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  render() { 
    const {children} = this.props;
    const {time} = this.state;

    return (
      <div className="story-title">
        <h1>{children}</h1>
        <h2>Today : {time.getMonth()+1}.{time.getDate()}</h2>
      </div>
    );
  }
}
 
export default StoryTitle;