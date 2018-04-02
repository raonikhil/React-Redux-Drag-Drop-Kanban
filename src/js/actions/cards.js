import { ADD_CARD, DELETE_CARD, MOVE_CARD } from "../constants/action-types";

export const addCard = (card, card_list_id, board_id) => ({
	type: ADD_CARD,
	payload: card
});
export const deleteCard = (card) => ({
	type: DELETE_CARD,
	payload: card
});
export const moveCard = (card, to_card_list_id) => ({
	type: MOVE_CARD,
	payload: { card, to_card_list_id }
});