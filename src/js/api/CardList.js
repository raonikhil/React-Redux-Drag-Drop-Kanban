import { API_BASE_URL } from "../constants/action-types";

class CardList {  
	static getAllCardList() {

		const request = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: '{ "method": "get_all_card_list" }' });

		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static addCardList(card_list) {
		const json = { "method": "add_card_list", card_list };
		const request = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static deleteCardList(card_list) {
		const json = { "method": "delete_card_list", card_list };
		const request = new Request(API_BASE_URL + 'v1/card_list.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}
}

export default CardList;