import {
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DELETE_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";
import axios from "axios";

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
export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});
export const getTodoList = () => {
  return dispatch => {
    axios.get("/list").then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    });
  };
};
