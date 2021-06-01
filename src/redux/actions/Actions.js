import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
} from "../types/Types";

export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const clearToDoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};
export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleToDo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
