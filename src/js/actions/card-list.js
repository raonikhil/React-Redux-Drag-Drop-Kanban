import { ADD_CARD_LIST, DELETE_CARD_LIST, LOAD_CARD_LIST_SUCCESS } from "../constants/action-types";
import CardList from "../api/CardList";

export const addCardListSuccess = (card_list) => ({
	type: ADD_CARD_LIST,
	payload: card_list
});
export const deleteCardListSuccess = (card_list) => ({
	type: DELETE_CARD_LIST,
	payload: card_list
});

export const loadCardList = () => {   
	return function(dispatch) {
		return CardList.getAllCardList()
						.then(card_list => dispatch(loadCardListSuccess(card_list)))
						.catch(error => { throw(error) });
	};
};

export const addCardList = (card_list) => {   
	return function(dispatch) {
		return CardList.addCardList(card_list)
						.then(card_list => dispatch(addCardListSuccess(card_list)))
						.catch(error => { throw(error) });
	};
};

export const deleteCardList = (card_list) => {   
	return function(dispatch) {
		return CardList.deleteCardList(card_list)
						.then(card_list => dispatch(deleteCardListSuccess(card_list)))
						.catch(error => { throw(error) });
	};
};

export function loadCardListSuccess(card_list) {  
	return {type: LOAD_CARD_LIST_SUCCESS, card_list};
}