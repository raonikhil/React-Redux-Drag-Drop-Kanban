import { ADD_CARD, DELETE_CARD, MOVE_CARD, LOAD_CARDS_SUCCESS } from "../constants/action-types";

const initialState = {
	cards: []
}
const card = (state = initialState, action) => {
	
	switch (action.type) {
		case LOAD_CARDS_SUCCESS:
    	return action.cards

		case ADD_CARD:
			return { ...state, cards: [...state.cards, action.payload] };

		case DELETE_CARD:
			console.log(action.payload);
			let cardItem = action.payload;
			const newState = Object.assign([], state);
      const indexOfCardToDelete = state.cards.findIndex(el => {
        return el.id === cardItem.id && el.listId === cardItem.listId && el.boardId === cardItem.boardId
      })

      newState.cards.splice(indexOfCardToDelete, 1);
      /*browserHistory.push('/boards');*/
      return newState;

		case MOVE_CARD:
			const { card, to_card_list_id } = action.payload;
			const newCardState = Object.assign([], state);
      const indexOfCard = state.cards.findIndex(el => {
        return el.id === card.id && el.listId === card.listId && el.boardId === card.boardId
      })

      newCardState.cards[indexOfCard].listId = to_card_list_id;

			return newCardState;

		default:
			return state;
	};
}

export default card;