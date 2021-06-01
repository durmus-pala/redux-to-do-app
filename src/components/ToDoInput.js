import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/actions/Actions";

const ToDoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addToDo(text));
      setText("");
    }
  };

  return (
    <div style={{ minWidth: "200px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "1rem",
            paddingLeft: "15px",
            borderRadius: "200px 0 0 20px",
            outline: "none",
          }}
        />
        <button
          style={{
            height: "50px",
            width: "75px",
            borderRadius: "0 20px 20px 0",
            backgroundColor: "#d44000",
            fontSize: "1rem",
            color: "white",
            outline: "none",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoInput;
