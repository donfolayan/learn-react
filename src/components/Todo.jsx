import { useState } from "react";
import "../styles/todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputField, setInputField] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: inputField,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInputField("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputField}
        placeholder="Add new todo"
        onChange={(e) => setInputField(e.target.value)}
      />
      <input type="submit" value="Submit" onClick={handleSubmit} />

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
