import React, { Component } from 'react';
import CardListItem from './CardListItem';
import AddCardList from './AddCardList';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempCardItem:{}
		}
	}
	
	getCardList()
	{
		let listItems;
		if(this.props.listItems) {
			listItems = this.props.listItems.map( listItem => {
				return (
					<CardListItem
						key={listItem.id}
						addCard={this.addCard.bind(this)}
						deleteCard={this.deleteCard.bind(this)}
						listItem={listItem}
						moveCard={this.moveCard.bind(this)}
					/>
				)
			});
		}
		return listItems;
	}

	addCardList(listItem)
	{
		this.props.addCardList(listItem);
	}

	addCard(id, cardItem) {
		this.props.addCard(id, cardItem);
	}

	deleteCard(id, listId) {
		this.props.deleteCard(id, listId);
	}

	moveCard(cardItem, from, to) {
		this.props.moveCard(cardItem, from, to);
	}
	
	render() {
		let listItems = this.getCardList();

		return (
			<div className="card-board-list">
				{listItems}
				<AddCardList addCardList={this.addCardList.bind(this)} />
			</div>
		);
	}
}

export default CardList;
