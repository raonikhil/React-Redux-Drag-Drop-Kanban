import { ADD_CARD, DELETE_CARD, MOVE_CARD, LOAD_CARDS_SUCCESS, API_BASE_URL } from "../constants/action-types";

export const addCardSuccess = (card) => ({
	type: ADD_CARD,
	payload: card
});
export const deleteCard = (card) => ({
	type: DELETE_CARD,
	payload: card
});
export const moveCard = (card, to_card_list_id) => ({
	type: MOVE_CARD,
	payload: { card, to_card_list_id }
});

export function loadCards() {  
  return function(dispatch) {
  	const myRequest = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: '{ "method": "get_all_cards" }' });

		return fetch(myRequest).then(response => {
			return response.json()
							.then(cards => dispatch(loadCardsSuccess(cards)))
							.catch(error => { throw(error) });
    			}).then(response => console.debug(response))
						.catch(error => console.error(error));
  };
}

export const addCard = (card) => {   
  return function(dispatch) {
  	let json = { "method": "add_card", card};

  	const myRequest = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: JSON.stringify(json) });

		return fetch(myRequest).then(response => {
			return response.json()
							.then(card => dispatch(addCardSuccess(card)))
							.catch(error => { throw(error) });
    			}).then(response => console.debug(response))
						.catch(error => console.error(error));
  };
};

export function loadCardsSuccess(cards) {
  return {type: LOAD_CARDS_SUCCESS, cards};
}