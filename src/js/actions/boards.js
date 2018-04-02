import { ADD_BOARD, DELETE_BOARD } from "../constants/action-types";

export const addBoard = board => ({
	type: ADD_BOARD,
	payload: board
});
export const deleteBoard = board_id => ({
	type: DELETE_BOARD,
	payload: { id: board_id }
});