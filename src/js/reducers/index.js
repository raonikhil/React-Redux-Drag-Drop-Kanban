import { combineReducers } from 'redux'
import boards from './boards'
import cardList from './card-list'
import cards from './cards'
 
export default combineReducers({
	boards,
	cardList,
	cards
});