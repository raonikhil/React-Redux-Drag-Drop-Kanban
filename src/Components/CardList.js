import React, { Component } from 'react';
import CardListItem from './CardListItem';
import AddCardList from './AddCardList';
import { Draggable, Droppable } from 'react-drag-and-drop';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}



	getCardList()
	{
		let listItems;
		if(this.props.listItems) {
			listItems = this.props.listItems.map( listItem => {
				return (
					<CardListItem key={listItem.id} addCard={this.addCard.bind(this)}  deleteCard={this.deleteCard.bind(this)} listItem={listItem} />
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

	onDrop() {
        console.log('data');
    }
	
	render() {
		let listItems = this.getCardList();

		return (
			<Droppable
				 className="card-board-list"
                onDrop={this.onDrop.bind(this)}>
				{listItems}
				<AddCardList addCardList={this.addCardList.bind(this)} />
			</Droppable>
		);
	}
}

export default CardList;
