import { ADD_BOARD, DELETE_BOARD, LOAD_BOARDS_SUCCESS } from "../constants/action-types";
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
		return Board.getAllBoards()
						.then(boards => dispatch(loadBoardsSuccess(boards)))
						.catch(error => { throw(error) });
	};
}

export const addBoard = (board) => {   
	return function(dispatch) {
		return Board.addBoard(board)
						.then(board => dispatch(addBoardSuccess(board)))
						.catch(error => { throw(error) });
	};
};

export function loadBoardsSuccess(boards) {
	return {type: LOAD_BOARDS_SUCCESS, boards};
}