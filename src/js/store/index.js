import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk), // middleware
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

export default store;