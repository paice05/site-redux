import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { actionsTodo } from "./store/ducks/todo";

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} />
      <button onClick={() => dispatch(actionsTodo.addTodo(name))}>Add</button>
      {todos.map(({ id, name, toggle }) => (
        <li key={id} style={{ display: "flex" }}>
          <p
            style={{
              textDecoration: toggle ? "line-through" : "",
              fontSize: "25px",
              margin: "0 15px"
            }}
            onClick={() => dispatch(actionsTodo.toogleTodo(id))}
          >
            {name}
          </p>
          <button onClick={() => dispatch(actionsTodo.removeTodo(id))}>
            remove
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
