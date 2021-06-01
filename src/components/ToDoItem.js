import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { toggleToDo, deleteToDo } from "../redux/actions/Actions";

const ToDoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleToDo(id));
  };

  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "20px",
  };

  return (
    <div style={styled} className="todoList">
      <h2
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        {text}
      </h2>
      <div>
        <span>
          <img
            src={okLogo}
            alt="ok logo"
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            alt="delete logo"
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default ToDoItem;
