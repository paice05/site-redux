const initialState = {
  todos: [
    { id: Math.floor(Math.random() * 99999), name: "Fazer cafe", toggle: true },
    {
      id: Math.floor(Math.random() * 99999),
      name: "Estudar redux",
      toggle: false
    },
    {
      id: Math.floor(Math.random() * 99999),
      name: "Finalizar TCC",
      toggle: true
    },
    {
      id: Math.floor(Math.random() * 99999),
      name: "Upload de arquivos",
      toggle: true
    }
  ],
  custom: []
};

export const typesTodo = {
  addTodo: "addTodo",
  removeTodo: "removeTodo",
  toggleTodo: "toggleTodo",
  allTodos: "allTodos",
  markedTodos: "markedTodos",
  notMarkedTodos: "notMarkedTodos"
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
  toggleTodo: id => ({
    type: typesTodo.toggleTodo,
    payload: id
  }),
  allTodos: () => ({
    type: typesTodo.allTodos
  }),
  markedTodos: () => ({
    type: typesTodo.markedTodos
  }),
  notMarkedTodos: () => ({
    type: typesTodo.notMarkedTodos
  })
};

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case typesTodo.addTodo:
      return {
        ...state,
        custom: [],
        todos: [
          ...state.todos,
          { id: Math.floor(Math.random() * 99999), name: action.payload }
        ]
      };
    case typesTodo.removeTodo:
      return {
        ...state,
        custom: [],
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case typesTodo.toggleTodo:
      return {
        ...state,
        custom: [],
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.toggle = !todo.toggle;
          }

          return todo;
        })
      };
    case typesTodo.allTodos:
      return {
        ...state,
        custom: state.todos
      }
    case typesTodo.markedTodos:
      return {
        ...state,
        custom: state.todos.filter(item => item.toggle)
      }
    case typesTodo.notMarkedTodos:
      return {
        ...state,
        custom: state.todos.filter(item => !item.toggle)
      }
    default:
      return state;
  }
};
