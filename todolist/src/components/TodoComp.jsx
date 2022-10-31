import { useReducer } from "react";
import TodoItemComp from "./TodoItemComp";

const initstate = {
  // todoitem의 형태 확인 : 1개의 todo 값을 가지고 있음
  todoitem: {
    done: true,
    todo: "확인용",
    id: 1,
  },
  // 배열을 통해서 여러 개의 todoitem 사용
  // todolist : todoitem을 넣을 공간
  todolist: [
    {
      done: true,
      todo: "첫번째 할일",
      id: 1,
    },
    {
      done: false,
      todo: "두번째 할일",
      id: 2,
    },
  ],
  // todo 값을 입력받을 todoInput
  todoInput: "",
  countAll: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case "checked": // 확인용
      return {
        ...state,
        todoitem: {
          ...state.todoitem, // todo, id
          done: !state.todoitem.done,
        },
      };
    case "checkedlist":
      // 리스트 안에서 객체 하나를 찾아, 그 객체의 done을 !값으로 바꿔줌
      // 객체 하나를 찾는 방법 : id를 통해 찾음
      const newTodoList = state.todolist.map((todoitem) => {
        if (todoitem.id == action.id) {
          // 새로 객체를 만들어주어서 done을 바꿔줌
          todoitem = {
            ...todoitem,
            done: !todoitem.done,
          };
        }
        return todoitem;
      });
      // 삼항 연산자로도 가능
      const newTodoList2 = state.todolist.map((todoitem) =>
        todoitem.id == action.id
          ? { ...todoitem, done: !todoitem.done }
          : todoitem
      );
      return { ...state, todolist: newTodoList };
    case "deletelist":
      // id 값을 가져와서, id 값과 같은 객체를 제외하고 배열 생성
      const newTodoList3 = state.todolist.filter(
        (todoitem) => todoitem.id != action.id
      );
      return { ...state, todolist: newTodoList3 };
    case "todoInput":
      return { ...state, todoInput: action.payload };
    case "todoAdd":
      if (!state.todoInput) {
        console.log("확인");
        alert("입력해주세요");
        return state; // 현재 state를 유지
      }
      // todo 객체를 만들어서 todolist에 연결하여 새로운 배열을 만듬
      const newTodoList4 = state.todolist.concat({
        done: false,
        todo: state.todoInput,
        id: state.countAll + 1,
      });
      return {
        ...state,
        todolist: newTodoList4,
        countAll: state.countAll + 1,
        todoInput: "",
      };
    default: // 다른 값이 들어왔을 때, 현재 state를 유지하고 오류를 알려줌
      console.error("존재하지 않는 액션타입 입니다");
      return state;
  }
}

const TodoComp = () => {
  const [state, dispatch] = useReducer(reducer, initstate);

  return (
    <div>
      <input
        type="text"
        value={state.todoInput}
        onChange={(e) => {
          dispatch({ type: "todoInput", payload: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "todoAdd" });
        }}
      >
        +
      </button>

      <ul>
        {/** 확인용 */}
        <li>
          {/** todoitem - 체크여부, 할일, id값(삭제에 필요) */}
          <input
            type="checkbox"
            checked={state.todoitem.done}
            onClick={() => {
              dispatch({ type: "checked" });
            }}
            readOnly
          />
          <span>{state.todoitem.todo}</span>
          <button>X</button>
        </li>
        {/** TodoItemComp를 만들어 map을 통해 내용 출력 */}
        {state.todolist.map((todoitem) => (
          <TodoItemComp
            key={todoitem.id}
            todoitem={todoitem}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoComp;
