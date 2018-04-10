import { ADD_BOARD, DELETE_BOARD, LOAD_BOARDS_SUCCESS } from "../constants/action-types";
import Board from "../api/Board";
// let boards = Board.getAllBoards();
// console.log(boards);
const initialState = {
	boards: []
}

const board = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BOARDS_SUCCESS:
    	return action.boards

		case ADD_BOARD:
			return { ...state, boards: [...state.boards, action.payload] };

		case DELETE_BOARD:
			const { id } = action.payload;
			const newState = Object.assign([], state);
      const indexOfBoardToDelete = state.boards.findIndex(board => {
        return board.id === id
      })

      newState.boards.splice(indexOfBoardToDelete, 1);
      /*browserHistory.push('/boards');*/
      return newState;

		default:
			return state;
	};
}

export default board;