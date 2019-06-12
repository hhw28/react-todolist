import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getChangeInputValueAction,
  getAddListItemAction,
  getDelItemAction,
  getInitList
} from "./store/actionCreator";
import axios from "axios";

class TodoList extends Component {
  componentDidMount() {
    this.props.getInitList();
  }
  render() {
    const { inputValue, list, changeValue, addList, delItem } = this.props;
    return (
      <div>
        <input type="text" value={inputValue} onChange={changeValue} />
        <button onClick={addList}>提交</button>

        {list.length > 0 ? (
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} onClick={() => delItem(index)}>
                  {item}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            <li>暂无数据</li>
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue(e) {
      const action = getChangeInputValueAction(e.target.value);
      dispatch(action);
    },
    addList() {
      const action = getAddListItemAction();
      dispatch(action);
    },
    delItem(index) {
      const action = getDelItemAction(index);
      dispatch(action);
    },
    getInitList() {
      axios.get("/list").then(res => {
        const action = getInitList(res.data);
        dispatch(action);
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
