import { API_BASE_URL } from "../constants/action-types";

class Board {  
	static getAllBoards() {

		const request = new Request(API_BASE_URL + 'v1/boards.php', { method: 'POST', body: '{ "method": "get_all_boards" }' });

		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}

	static addBoard(board) {
		const json = { "method": "add_board", board };
		const request = new Request(API_BASE_URL + 'v1/boards.php', { method: 'POST', body: JSON.stringify(json) });
		
		return fetch(request)
						.then(response => response.json())
						.then(response => response)
						.catch(error => error);
	}
}

export default Board;