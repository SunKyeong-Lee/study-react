const LoginFormComp = (props) => {
  const { setLogin, setName } = props;

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();  // 새로고침 취소
          setLogin(true);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default LoginFormComp;
