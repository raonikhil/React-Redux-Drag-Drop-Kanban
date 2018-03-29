import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Card from './Card';
import AddCard from './AddCard';

class CardListItem extends Component {

	getCardItems()
	{
		let cardItems;
		if(this.props.listItem) {
			cardItems = this.props.listItem.cardItems.map( cardItem => {
				return (
					<Card key={cardItem.id} listId={this.props.listItem.id} deleteCard={this.deleteCard.bind(this)} cardItem={cardItem} />
				)
			});
		}
		return cardItems;
	}

	deleteCard(id, listId) {
		this.props.deleteCard(id, listId);
	}

	addCard(id, cardItem) {
		this.props.addCard(id, cardItem);
	}

	onDrop() {
        console.log('data');
    }

	render() {
		let style = {
			opacity:1
		}
		let cardItems = this.getCardItems();
		return (
			<Draggable className="desk" style={style}>
				<div className="desk-head">
					<div className="desk-name">{this.props.listItem.title}</div>
				</div>
				<div className="desk-items">
					{cardItems}
					<AddCard addCard={this.addCard.bind(this)} listItem={this.props.listItem} />
				</div>
			</Draggable>
		);
	}
}

export default CardListItem;
