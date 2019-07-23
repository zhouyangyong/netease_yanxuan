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