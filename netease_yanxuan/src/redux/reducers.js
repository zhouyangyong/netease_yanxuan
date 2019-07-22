import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';

const initialState = {
  searchHistory: []
}

function searchHistory(searchHistory = initialState.searchHistory, action) {
  switch(action.type) {
    case ActionType.ADD_SEARCHHISTORY:
      return [
        action.searchHistory,
        ...searchHistory
      ]
    case ActionType.DELETE_SEARCHHISTORY:
      return {
        searchHistory: []
      }
    default:
      return searchHistory
  }
}

export default combineReducers({
  searchHistory
})