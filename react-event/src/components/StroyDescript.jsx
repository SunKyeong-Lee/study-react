// 클래스형 컴포넌트
// 컨텐츠 본문

import { Component } from "react";

class StoryDescript extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const {children, visible} = this.props;

    return (
      <div>
        <div className="story-descript">
          <h3>본문</h3>
          <p>{children}</p>
          {visible ? (<p>공개</p>) : (<p>비공개</p>)}
        </div>
      </div>
    );
  }
}
 
export default StoryDescript;