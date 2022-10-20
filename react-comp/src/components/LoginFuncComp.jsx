// 함수형 컴포넌트
import PropTypes from "prop-types";

const LoginFuncComp = (props) => {

  const {name, login} = props;

  return (
    <div>
      { login ? (
        <div>
          <h1>로그인에 성공하였습니다</h1>
          <p>{name}입니다</p>
        </div>
      ) : (
        <div>
          <h1>로그인이 필요합니다</h1>
          <p>리액트를 시작하였습니다</p>
        </div>
      ) }
    </div>
  );

}

export default LoginFuncComp;

// props의 기본값 설정
// props의 값이 들어오지 않았을 때 대체할 값
// 위의 내용을 가져와서 설정할 수 있다.
LoginFuncComp.defaultProps = {
  name : "기본이름"
}

// props의 자료형 검사
// import PropTypes from "prop-types";
// 전달받은 props의 자료형과 명시한 자료형이 일치하지 않으면
// 콘솔 창에 경고 에러문을 띄운다.
LoginFuncComp.propTypes = {
  login: PropTypes.bool
}