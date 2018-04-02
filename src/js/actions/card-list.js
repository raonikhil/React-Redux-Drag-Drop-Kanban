import { ADD_CARD_LIST, DELETE_CARD_LIST } from "../constants/action-types";

export const addCardList = (card_list) => ({
	type: ADD_CARD_LIST,
	payload: card_list
});
export const deleteCardList = (card_list) => ({
	type: DELETE_CARD_LIST,
	payload: card_list
});