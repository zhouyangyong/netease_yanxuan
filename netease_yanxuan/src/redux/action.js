import * as ActionTypes from './actionTypes';

export function add_searchHistory(searchHistory) {
  return {
    type: ActionTypes.ADD_SEARCHHISTORY,
    searchHistory
  }
}

export function clear_searchHistory() {
  return {
    type: ActionTypes.CLEAR_SEARCHHISTORY
  }
}

export function add_cartList(cartList) {
  return {
    type: ActionTypes.ADD_CARTLIST,
    cartList
  }
}

export function remove_cartList(id) {
  return {
    type: ActionTypes.REMOVE_CARTLIST,
    id
  }
}