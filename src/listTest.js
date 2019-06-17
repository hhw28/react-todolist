import React, { Component } from "react";

// 单项
class Item extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  // 补全删除功能

  render() {
    const props = this.props;
    return (
      <div onClick={() => props.delItem(props.index)}>
        {/* 在此完成功能 */}
        {props.text}
      </div>
    );
  }
}

// 列表
class List extends Component {
  state = {
    list: new Array(10).fill("").map((n, i) => (n = i))
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        {/* 完成渲染功能 */}
        {this.state.list.map((item, index) => {
          return (
            <Item
              key={index}
              index={index}
              text={item}
              delItem={this.delItem.bind(this)}
            />
          );
        })}
      </div>
    );
  }

  delItem(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default List;
