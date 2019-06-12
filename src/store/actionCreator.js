import {
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DELETE_ITEM,
  GET_INIT_LIST
} from "./actionTypes";

export const getChangeInputValueAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddListItemAction = () => ({
  type: ADD_LIST_ITEM
});
export const getDelItemAction = index => ({
  type: DELETE_ITEM,
  index
});
export const getInitList = data => ({
  type: GET_INIT_LIST,
  data
});
