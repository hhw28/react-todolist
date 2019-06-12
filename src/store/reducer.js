import {
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DELETE_ITEM,
  GET_INIT_LIST
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_LIST_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_INIT_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
