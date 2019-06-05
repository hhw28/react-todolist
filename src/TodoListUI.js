import React from "react";

const TodoListUI = props => {
  return (
    <div className="TodoList">
      <input
        type="text"
        value={props.inputValue}
        onChange={props.changeValue}
      />
      <button onClick={props.addList}>提交</button>

      <ul>
        {props.list.map((item, index) => {
          return (
            <li key={index} onClick={() => props.delItem(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListUI;
