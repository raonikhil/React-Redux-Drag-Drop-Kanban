import { ADD_CARD_LIST, DELETE_CARD_LIST, LOAD_CARD_LIST_SUCCESS, API_BASE_URL } from "../constants/action-types";

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
		const myRequest = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: '{ "method": "get_all_card_list" }' });

		return fetch(myRequest).then(response => {
			return response.json()
							.then((card_list) => dispatch(loadCardListSuccess(card_list)))
							.catch(error => { throw(error) });
					}).then(response => console.debug(response))
						.catch(error => console.error(error));
	};
};

export const addCardList = (card_list) => {   
	return function(dispatch) {
		let json = { "method": "add_card_list", card_list };

		const myRequest = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: JSON.stringify(json) });

		return fetch(myRequest).then(response => {
			return response.json()
							.then(card_list => dispatch(addCardListSuccess(card_list)))
							.catch(error => { throw(error) });
					}).then(response => console.debug(response))
						.catch(error => console.error(error));
	};
};

export const deleteCardList = (card_list) => {   
	return function(dispatch) {
		let json = { "method": "delete_card_list", card_list };

		const myRequest = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: JSON.stringify(json) });

		return fetch(myRequest).then(response => {
			return response.json()
							.then(card_list => dispatch(deleteCardListSuccess(card_list)))
							.catch(error => { throw(error) });
					}).then(response => console.debug(response))
						.catch(error => console.error(error));
	};
};

export function loadCardListSuccess(card_list) {  
	return {type: LOAD_CARD_LIST_SUCCESS, card_list};
}