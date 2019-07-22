import * as ActionTypes from './actionTypes';

export function add_searchHistory(searchHistory) {
  return {
    type: ActionTypes.ADD_SEARCHHISTORY,
    searchHistory
  }
}

export function delete_searchHistory(searchHistory) {
  return {
    type: ActionTypes.DELETE_SEARCHHISTORY,
    searchHistory
  }
}