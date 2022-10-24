// 클래스형 컴포넌트
import { Component } from "react";

class MapComp extends Component {
  constructor(props) {
    super(props);
    // 배열의 map을 통해서 반복 컴포넌트 작성
    this.state = {
      season: ['봄', '여름', '가을', '겨울']
    }
  }

  render() { 
    const {season} = this.state;
    // state에 있는 season 배열을 map을 통해 태그 안에 값을 넣어서 사용
    const seasonItem = season.map(
      // 여러줄로 작성할 때, ()로 감싸서 사용`
      // 배열을 map() 함수를 이용하여 호출할 때 update를 최소화하기 위해 key값을 작성해줌
      // key값은 id값을 작성해주는 것을 권장
      (season, index) => (<li key={index}>{season}</li>)
    );

    return (
      <div>
        {/** 데이터 배열 > 컴포넌트 배열로 변환 */}
        <ul>{seasonItem}</ul>
        {/** HTML 태그 안에서의 사용 > {} 안에서 자바스크립트 사용 가능 */}
        <ul>
          {season.map(
            (season, index) => (
              // 여러줄로 작성할때 소괄호로 감싸서 작성
              <li key={index}>
                <a href="">{season}</a>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}
 
export default MapComp;