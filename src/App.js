import React, { Component } from 'react';
import uuid from 'uuid';
import CardList from './Components/CardList';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: []
		}
	}

	componentWillMount() {
		this.setState({
			listItems: []
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

	render() {
		return (
			<main data-reactroot>
				<CardList addCardList={this.handleAddCardList.bind(this)} addCard={this.handleAddCard.bind(this)}  deleteCard={this.deleteCard.bind(this)} listItems={this.state.listItems} />
			</main>
		);
	}
}

export default App;
