import { API_BASE_URL } from "../constants/action-types";

class Card {  
	static getAllCards() {

		const request = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: '{ "method": "get_all_cards" }' });

		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static addCard(card) {
		const json = { "method": "add_card", card };
		const request = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static deleteCard(card) {
		const json = { "method": "delete_card", card };
		const request = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static moveCard(card, to_card_list_id) {
		const json = { "method": "move_card", card, to_card_list_id };
		const request = new Request(API_BASE_URL + 'v1/cards.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}
}

export default Card;