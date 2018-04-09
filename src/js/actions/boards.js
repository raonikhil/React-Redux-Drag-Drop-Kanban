import { ADD_BOARD, DELETE_BOARD, LOAD_BOARDS_SUCCESS, API_BASE_URL } from "../constants/action-types";
import Board from "../api/Board";

export const addBoardSuccess = board => ({
	type: ADD_BOARD,
	payload: board
});
export const deleteBoard = board_id => ({
	type: DELETE_BOARD,
	payload: { id: board_id }
});

export const loadBoards = () => {  
  return function(dispatch) {
  	const myRequest = new Request(API_BASE_URL + 'v1/boards.php', { method: 'POST', body: '{ "method": "get_all_boards" }' });
  	const a = Board.getAllBoards();

  	console.log(a);
		return fetch(myRequest).then(response => {
						return response.json()
							.then(boards => dispatch(loadBoardsSuccess(boards)))
							.catch(error => { throw(error) });
    			}).then(response => console.debug(response))
						.catch(error => console.error(error));
  };
}

export const addBoard = (board) => {   
  return function(dispatch) {
  	const json = { "method": "add_board", board };

  	const myRequest = new Request(API_BASE_URL + 'v1/boards.php', { method: 'POST', body: JSON.stringify(json) });

		return fetch(myRequest).then(response => {
			return response.json()
							.then(board => dispatch(addBoardSuccess(board)))
							.catch(error => { throw(error) });
    			}).then(response => console.debug(response))
						.catch(error => console.error(error));
  };
};

export function loadBoardsSuccess(boards) {
  return {type: LOAD_BOARDS_SUCCESS, boards};
}