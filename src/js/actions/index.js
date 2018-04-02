import { ADD_BOARD } from "../constants/action-types";

export const addBoard = board => ({ type: ADD_BOARD, payload: board });