import React, { Component } from 'react';
import uuid from 'uuid';
import CardList from './Components/CardList';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: []
		}
	}

	componentWillMount() {
		let listId1 = uuid.v4(), listId2 = uuid.v4();

		this.setState({
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
	}

	handleAddCardList(listItem) {
		let listItems = this.state.listItems;
		listItems.push(listItem);
		this.setState({ listItems: listItems});
	}

	handleAddCard(id, cardItem) {
		let listItems = this.state.listItems;

		let index = listItems.findIndex(x => x.id === id);
		listItems[index].cardItems.push(cardItem);
		this.setState({ listItems: listItems});
	}

	deleteCard(id, listId) {
		let listItems = this.state.listItems;

		let index = listItems.findIndex(x => x.id === listId);
		
		let cardIndex = listItems[index].cardItems.findIndex(x => x.id === id);
		listItems[index].cardItems.splice(cardIndex, 1);
		this.setState({ listItems: listItems});
	}

	moveCard(cardItem, from, to) {
		let listItems = this.state.listItems;
		let fromIndex = listItems.findIndex(x => x.id === from);
		let cardIndex = listItems[fromIndex].cardItems.findIndex(x => x.id === cardItem.id);

		listItems[fromIndex].cardItems.splice(cardIndex, 1);
		this.setState({ listItems: listItems});

		cardItem.listId	= to;
		let toIndex = listItems.findIndex(x => x.id === to);
		listItems[toIndex].cardItems.push(cardItem);
		this.setState({ listItems: listItems});
	}

	render() {
		return (
			<main data-reactroot>
				<CardList
					addCardList={this.handleAddCardList.bind(this)}
					addCard={this.handleAddCard.bind(this)}
					deleteCard={this.deleteCard.bind(this)}
					moveCard={this.moveCard.bind(this)}
					listItems={this.state.listItems}
				/>
			</main>
		);
	}
}

export default  DragDropContext(HTML5Backend)(App);