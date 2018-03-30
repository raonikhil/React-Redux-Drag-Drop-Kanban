import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Card from './Card';
import AddCard from './AddCard';
import { DropTarget } from 'react-dnd'


const Types = {
	ITEM: 'Card'
}
function collect(connect, monitor) {
	 return {
	 	connectDropTarget: connect.dropTarget()
	 }
}

const dropCardListTarget = {
	canDrop(props, monitor) {
		// You can disallow drop based on props or item
		const item = monitor.getItem();
		return true;
	},

	hover(props, monitor, component) {
		// This is fired very often and lets you perform side effects
		// in response to the hover. You can't handle enter and leave
		// here—if you need them, put monitor.isOver() into collect() so you
		// can just use componentWillReceiveProps() to handle enter/leave.

		// You can access the coordinates if you need them
		const clientOffset = monitor.getClientOffset();
		const componentRect = findDOMNode(component).getBoundingClientRect();

		// You can check whether we're over a nested drop target
		const isJustOverThisOne = monitor.isOver({ shallow: true });

		// You will receive hover() even for items for which canDrop() is false
		const canDrop = monitor.canDrop();
	},

	drop(props, monitor, component) {
		if (monitor.didDrop()) {
			// If you want, you can check whether some nested
			// target already handled drop
			return;
		}

		// Obtain the dragged item
		const item = monitor.getItem();

		// You can do something with it
		props.moveCard(item.cardItem, item.listId, props.listItem.id);

		// You can also do nothing and return a drop result,
		// which will be available as monitor.getDropResult()
		// in the drag source's endDrag() method
		return { moved: true };
	}
};

class CardListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempCardItem:{}
		}
	}

	getCardItems()
	{
		let cardItems;
		if(this.props.listItem) {
			cardItems = this.props.listItem.cardItems.map( cardItem => {
				return (
					<Card key={cardItem.id} listId={this.props.listItem.id} deleteCard={this.deleteCard.bind(this)}  moveCard={this.moveCard.bind(this)} cardItem={cardItem} />
				)
			});
		}
		return cardItems;
	}

	deleteCard(id, listId) {
		this.props.deleteCard(id, listId);
	}

	moveCard(cardItem, from, to) {
		this.props.moveCard(cardItem, from, to);
	}

	addCard(id, cardItem) {
		this.props.addCard(id, cardItem);
	}

	render() {
		const { connectDropTarget } = this.props
		let style = {
			opacity:1
		}
		let cardItems = this.getCardItems();
		return connectDropTarget(
			<div
				className="desk"
				style={style}
                >
				<div className="desk-head">
					<div className="desk-name">{this.props.listItem.title}</div>
				</div>
				<div className="desk-items">
					{cardItems}
					<AddCard addCard={this.addCard.bind(this)} listItem={this.props.listItem} />
				</div>
			</div>
		);
	}
}

export default DropTarget(Types.ITEM, dropCardListTarget, collect)(CardListItem);
