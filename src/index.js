import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import "./index.scss";
import todos from "./reducers";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
const store = createStore(todos);
store.dispatch(addTodo("my first todo item"));
store.dispatch(addTodo("my second todo item"));
store.dispatch(addTodo("my third todo item"));
store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());
store.dispatch(deleteTodo(0));

console.log("state", store.getState());
function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
