import "./App.css";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>Clarus Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
