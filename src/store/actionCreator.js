import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_ITEM } from './actionTypes'

export const getChangeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddListItemAction = () => ({
  type: ADD_LIST_ITEM
})
export const getDelItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

