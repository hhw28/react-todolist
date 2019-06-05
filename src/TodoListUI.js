import React, { Component } from "react";

class TodoListUI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoList">
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.changeValue}
        />
        <button onClick={this.props.addList}>提交</button>

        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index} onClick={() => this.props.delItem(index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoListUI;
