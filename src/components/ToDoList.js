import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearToDoList } from "../redux/actions/Actions";
import TodoItem from "./ToDoItem";

const ToDoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearToDoList());
  };

  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        onClick={handleClearList}
        style={{
          height: "50px",
          width: "100px",
          marginTop: "25px",
          fontSize: "1rem",
          backgroundColor: "#ac0d0d",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ToDoList;
