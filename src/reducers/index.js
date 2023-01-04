import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";
const todos = (state = [], actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: actions.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === actions.index ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.splice(actions.index, 1);

    default:
      return state;
  }
};
export default todos;
