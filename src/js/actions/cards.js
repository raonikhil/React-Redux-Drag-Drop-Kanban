import { ADD_CARD, DELETE_CARD, MOVE_CARD, LOAD_CARDS_SUCCESS } from "../constants/action-types";
import Card from "../api/Card";

export const addCardSuccess = (card) => ({
	type: ADD_CARD,
	payload: card
});
export const deleteCardSuccess = (card) => ({
	type: DELETE_CARD,
	payload: card
});
export const moveCardSuccess = (card, to_card_list_id) => ({
	type: MOVE_CARD,
	payload: { card, to_card_list_id }
});

export function loadCards() {  
  return function(dispatch) {
  	return Card.getAllCards()
  					.then(cards => dispatch(loadCardsSuccess(cards)))
  					.catch(error => { throw(error) });
  };
}

export const addCard = (card) => {   
  return function(dispatch) {
  	return Card.addCard(card)
  					.then(card => dispatch(addCardSuccess(card)))
  					.catch(error => { throw(error) });
  };
};

export const deleteCard = (card) => {   
  return function(dispatch) {
  	return Card.deleteCard(card)
  					.then(card => dispatch(deleteCardSuccess(card)))
  					.catch(error => { throw(error) });
  };
};

export const moveCard = (card, to_card_list_id) => {
  return function(dispatch) {
  	return Card.moveCard(card, to_card_list_id)
  					.then(() => dispatch(moveCardSuccess(card, to_card_list_id)))
  					.catch(error => { throw(error) });
  };
};

export function loadCardsSuccess(cards) {
  return {type: LOAD_CARDS_SUCCESS, cards};
}