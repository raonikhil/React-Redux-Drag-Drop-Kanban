import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../js/store/index";
import {loadBoards} from "../js/actions/boards";
import {loadCardList} from "../js/actions/card-list";
import {loadCards} from "../js/actions/cards";
import App from "./components/App";
import "../App.css";
import Home from "./components/Home";
import Board from "./components/boards/Board";

window.store = store;
window.loadBoards = loadBoards;

store.dispatch(loadBoards());
store.dispatch(loadCardList());
store.dispatch(loadCards());
ReactDom.render(
  <Provider store={store}>
  	<Router>
  		<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/boards" component={App} />
				<Route exact path="/board/:board_id" component={Board} />
			</Switch>
  	</Router>
  </Provider>,
  document.getElementById("app")
);