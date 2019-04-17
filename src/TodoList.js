import React, { Component } from 'react';
import store from './store'
import { getChangeInputValueAction, getAddListItemAction, getDelItemAction } from './store/actionCreator'

class TodoList extends Component {

  constructor(props){
    super(props)
    this.state = store.getState()

    this.addList = this.addList.bind(this)
    this.changeStore = this.changeStore.bind(this)

    // store变更的时候会自动执行该方法
    store.subscribe(this.changeStore)
  }

  render() {

    return (
      <div className="TodoList">
        <input type="text" value={this.state.inputValue} onChange={(e) => this.changeValue(e)}/>
        <button onClick={this.addList}>提交</button>

        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.delItem(index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  changeStore(){
    this.setState(store.getState())
  }
  changeValue(e){
    const action = getChangeInputValueAction(e.target.value)
    store.dispatch(action)
  }

  addList(){
    const action = getAddListItemAction()
    store.dispatch(action)
  }

  delItem(index){
    const action = getDelItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
