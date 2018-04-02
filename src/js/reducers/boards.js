import { ADD_BOARD, DELETE_BOARD } from "../constants/action-types";

const initialState = {
	boards: []
}

const board = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOARD:
			return { ...state, boards: [...state.boards, action.payload] };

		case DELETE_BOARD:
			const { id } = action.payload;
			const newState = Object.assign([], state);
      const indexOfBoardToDelete = state.boards.findIndex(board => {
        return board.id == id
      })

      newState.boards.splice(indexOfBoardToDelete, 1);
      /*browserHistory.push('/boards');*/
      return newState;

		default:
			return state;
	};
}

export default board;