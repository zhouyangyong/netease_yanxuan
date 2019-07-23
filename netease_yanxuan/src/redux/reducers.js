import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';

const initialState = {
  searchHistory: []
}

function searchHistory(searchHistory = initialState.searchHistory, action) {
  switch(action.type) {
    case ActionType.ADD_SEARCHHISTORY:
      let newState = [action.searchHistory, ...searchHistory.slice(0)]
      return newState
    case ActionType.CLEAR_SEARCHHISTORY:
      return searchHistory.splice(searchHistory.length)
    default:
      return searchHistory
  }
}

export default combineReducers({
  searchHistory
})