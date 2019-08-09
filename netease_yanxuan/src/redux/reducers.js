import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';


const initialState = {
  searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || [],
  cartList: JSON.parse(localStorage.getItem('cartList')) || []
}


function searchHistory(searchHistory = initialState.searchHistory, action) {
  switch (action.type) {
    case ActionType.ADD_SEARCHHISTORY:
      return [
        action.searchHistory,
        ...searchHistory
      ]
    case ActionType.CLEAR_SEARCHHISTORY:
      return searchHistory.splice(searchHistory.length)
    default:
      return searchHistory
  }
}

function cartList(cartList = initialState.cartList, action) {
  switch (action.type) {
    case ActionType.ADD_CARTLIST:
      let cart = [action.cartList, ...cartList]
      localStorage.setItem('cartList', JSON.stringify(cart))
      return cart;
    case ActionType.REMOVE_CARTLIST:
      return [
        ...cartList.splice(action.id, 1)
      ]
    default:
      return cartList
  }
}

export default combineReducers({
  searchHistory,
  cartList
})