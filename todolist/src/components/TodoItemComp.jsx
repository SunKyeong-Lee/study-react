import './css/todoItem.css'

const TodoItemComp = (props) => {
  const { todoitem, dispatch } = props;

  return (
    <li className={todoitem.done ? 'done' : undefined}>
      {/** todoitem - 체크여부, 할일, id값(삭제에 필요) */}
      <input
        type="checkbox"
        checked={todoitem.done}
        onClick={() => {
          dispatch({ type: "checkedlist", id: todoitem.id });
        }}
        readOnly
      />
      <span>{todoitem.todo}</span>
      <button
        onClick={() => {
          dispatch({ type: "deletelist", id: todoitem.id });
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItemComp;
