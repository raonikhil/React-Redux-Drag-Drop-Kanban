import { ADD_CARD_LIST, DELETE_CARD_LIST } from "../constants/action-types";

const initialState = {
	card_list: []
}
const cardList = (state = initialState, action) => {
console.log(action);
	switch (action.type) {
		case ADD_CARD_LIST:
			return { ...state, card_list: [...state.card_list, action.payload] };

		case DELETE_CARD_LIST:
			let listItem = action.payload;
			const newState = Object.assign([], state);
      const indexOfCardListToDelete = state.card_list.findIndex(list => {
        return list.id == listItem.id && list.boardId == listItem.boardId
      })
console.log(indexOfCardListToDelete);
      newState.card_list.splice(indexOfCardListToDelete, 1);
      /*browserHistory.push('/boards');*/
      return newState;

		default:
			return state;
	};
}

export default cardList;