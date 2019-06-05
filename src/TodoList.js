import React, { Component } from "react";
import store from "./store";
import {
  getChangeInputValueAction,
  getAddListItemAction,
  getDelItemAction
} from "./store/actionCreator";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.addList = this.addList.bind(this);
    this.changeStore = this.changeStore.bind(this);
    this.changeValue = this.changeValue.bind(this);

    // store变更的时候会自动执行该方法
    store.subscribe(this.changeStore);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeValue={this.changeValue}
        addList={this.addList}
        delItem={this.delItem}
      />
    );
  }
  changeStore() {
    this.setState(store.getState());
  }
  changeValue(e) {
    const action = getChangeInputValueAction(e.target.value);
    store.dispatch(action);
  }

  addList() {
    const action = getAddListItemAction();
    store.dispatch(action);
  }

  delItem(index) {
    const action = getDelItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
