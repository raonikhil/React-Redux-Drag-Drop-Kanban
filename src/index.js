import index from './js/index';
/*import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = function (state, action) {
	console.log(state);
	switch (action.type) {
		case "test": 
			return (state + action.payload)
			break;
		case "xyz": 
			return (state - action.payload)
			break;
		case "test 2": break;
		case "test 3": break;
		default: break;
	}
	return state;
}
const listId1 = uuid.v4(), listId2 = uuid.v4();
const store = createStore(reducers, {
			listItems: [
				{
					"id": listId1,
					"title":"List 1",
					"cardItems":[
						{
							"id": uuid.v4(),
							"listID":listId1,
							"title":"List 1 Card 1"
						},
						{
							"id":"ebd8d3fc-254c-48eb-8ffa-cdea74822609",
							"listID":listId1,
							"title":"List 1 Card 2"
						}
					]
				},
				{
					"id": listId2,
					"title":"List 2",
					"cardItems":[
						{
							"id": uuid.v4(),
							"listID":listId2,
							"title":"List 2 Card 1"
						},
						{
							"id": uuid.v4(),
							"listID":listId2,
							"title":"List 2 Card 2"
						}
					]
				},
				{
					"id": uuid.v4(),
					"title":"List 3",
					"cardItems":[

					]
				},
				{
					"id": uuid.v4(),
					"title":"List 4",
					"cardItems":[

					]
				}
			]
		});

const subscribe = function () {
	console.log("change submitted", store.getState());
}

store.subscribe(subscribe);

store.dispatch({type: "test", payload: 1 });
store.dispatch({type: "test", payload: 1 });
store.dispatch({type: "xyz", payload: 1 });
store.dispatch({type: "test 2", payload: 1 });
store.dispatch({type: "test 3", payload: 1 });
store.dispatch({type: "test 4", payload: 1 });

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();*/
