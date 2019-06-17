import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";
import List from "./listTest";

const App = (
  <Provider store={store}>
    <TodoList />
    <List />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
