import { ADD_BOARD, DELETE_BOARD, LOAD_BOARDS_SUCCESS } from "../constants/action-types";
// import Board from "../api/Board";

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
  	const myRequest = new Request('http://localhost/api/v1/boards.php', { method: 'POST', body: '{ "method": "get_all_boards" }' });

		return fetch(myRequest).then(response => {
						return response.json().then((boards) => {
				    	console.log(boards);
				      dispatch(loadBoardsSuccess(boards));
				    }).catch(error => {
				      throw(error);
				    });
    			}).then(response => {
						console.debug(response);
					}).catch(error => {
						console.error(error);
					});
  };
}

export const addBoard = (board) => {   
  return function(dispatch) {
  	let json = { "method": "add_board", board };
console.log(addBoard);
  	const myRequest = new Request('http://localhost/api/v1/boards.php', { method: 'POST', body: JSON.stringify(json) });

		return fetch(myRequest).then(response => {
						return response.json().then((board) => {
				    	console.log(board);
				      dispatch(addBoardSuccess(board));
				    }).catch(error => {
				      throw(error);
				    });
    			}).then(response => {
						console.debug(response);
					}).catch(error => {
						console.error(error);
					});
  };
};

export function loadBoardsSuccess(boards) {  
  return {type: LOAD_BOARDS_SUCCESS, boards};
}