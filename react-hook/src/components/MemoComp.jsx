// ReducerComp의 자식 컴포넌트

const MemoComp = (props) => {
  const {dispatch} = props;

  return (
    <div>
      <input 
        type="text" 
        placeholder="자식 컴포넌트에서의 input"
        // setState(e.target.value) >> dispatch에서 쓸수있도록
        onChange={(e) => { dispatch({
          type: 'changeInput',
          payload: e.target.value
        }) }}
      />
    </div>
  );
}
 
export default MemoComp;