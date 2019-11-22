import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { actionsTodo } from "./store/ducks/todo";

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const todos = useSelector(state => state.todos.todos);
  const custom = useSelector(state => state.todos.custom);

  const handleView = array =>
    array.length !== 0 &&
    array.map(({ id, name, toggle }) => (
      <li key={id} style={{ display: "flex" }}>
        <p
          style={{
            textDecoration: toggle ? "line-through" : "",
            fontSize: "25px",
            margin: "0 15px"
          }}
          onClick={() => dispatch(actionsTodo.toggleTodo(id))}
        >
          {name}
        </p>
        <button onClick={() => dispatch(actionsTodo.removeTodo(id))}>
          remove
        </button>
      </li>
    ));

  return (
    <div className="App">
      <input type="text" onChange={e => setName(e.target.value)} />
      <button onClick={() => dispatch(actionsTodo.addTodo(name))}>Add</button>
      {!custom.length > 0 && handleView(todos)}
      {custom.length > 0 && handleView(custom)}
      <button
        style={{ margin: "15px 15px" }}
        onClick={() => dispatch(actionsTodo.allTodos())}
      >
        {" "}
        all{" "}
      </button>
      <button
        style={{ margin: "15px 15px" }}
        onClick={() => dispatch(actionsTodo.markedTodos())}
      >
        {" "}
        marked{" "}
      </button>
      <button
        style={{ margin: "15px 15px" }}
        onClick={() => dispatch(actionsTodo.notMarkedTodos())}
      >
        {" "}
        not marked{" "}
      </button>
    </div>
  );
}

export default App;
