const initialState = {
  todos: [
    { id: Math.floor(Math.random() * 99999), name: "Fazer cafe", toggle: true },
    { id: Math.floor(Math.random() * 99999), name: "Estudar redux", toggle: false },
    { id: Math.floor(Math.random() * 99999), name: "Finalizar TCC", toggle: true },
    { id: Math.floor(Math.random() * 99999), name: "Upload de arquivos", toggle: true }
  ]
};

export const typesTodo = {
  addTodo: "addTodo",
  removeTodo: "removeTodo",
  toggleTodo: "toggleTodo"
};

export const actionsTodo = {
  addTodo: name => ({
    type: typesTodo.addTodo,
    payload: name
  }),
  removeTodo: id => ({
    type: typesTodo.removeTodo,
    payload: id
  }),
  toogleTodo: id => ({
    type: typesTodo.toggleTodo,
    payload: id
  })
};

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case typesTodo.addTodo:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.floor(Math.random() * 99999), name: action.payload }
        ]
      };
    case typesTodo.removeTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case typesTodo.toggleTodo:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id === action.payload) {
            todo.toggle = !todo.toggle
          }

          return todo
        })
      }
    default:
      return state;
  }
};
