import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import Card from '../cards/Card';
import AddCard from '../cards/AddCard';
import { DropTarget } from 'react-dnd';
import { deleteCardList } from "../../actions/card-list";
import { deleteCard } from "../../actions/cards";

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
		props.moveCard(item.cardItem, props.listItem.id);

		// You can also do nothing and return a drop result,
		// which will be available as monitor.getDropResult()
		// in the drag source's endDrag() method
		return { moved: true };
	}
};

const mapStateToProps = state => {
	return { boards: state.boards, cards: state.cards };
};

const mapDispatchToProps = dispatch => {
	return {
		deleteCard: (card) => dispatch(deleteCard(card)),
		deleteCardList: (listItem) => dispatch(deleteCardList(listItem))
	};
};

class ConnectedCardListItem extends Component {
	constructor(props) {
		super(props);
		this.deleteCardList = this.deleteCardList.bind(this, this.props.listItem)
	}

	getCardItems()
	{
		const { cards } = this.props.cards;
		const boardId = this.props.listItem.boardId
		const listId = this.props.listItem.id
		const cardItems = cards.filter(card => card.boardId === boardId && card.listId === listId);
		return cardItems;
	}

	deleteCardList(listItem) {
		const { cards } = this.props.cards;
		let list = listItem;
		const cardItems = cards.filter(card => card.boardId === list.boardId && card.listId === list.id);
		cardItems.map( cardItem => {
			return this.props.deleteCard(list);
		});
		console.log(list);
		this.props.deleteCardList(list);
	}

	render() {
		const { connectDropTarget } = this.props
		let style = {
			opacity:1
		}
		let cards = this.getCardItems();
		return connectDropTarget(
			<div
				className="desk"
				style={style}>
				<div className="desk-head">
					<div className="desk-name">{this.props.listItem.title}</div><a href="#" onClick={this.deleteCardList} >X Delete</a>
				</div>
				<div className="desk-items">
					{cards.map( cardItem => (
						<Card key={cardItem.id} listId={this.props.listItem.id} cardItem={cardItem} />
					))}
					<AddCard listItem={this.props.listItem} boardId={this.props.boardId} />
				</div>
			</div>
		);
	}
}

const CardListItem = connect(mapStateToProps, mapDispatchToProps)(ConnectedCardListItem);
export default DropTarget(Types.ITEM, dropCardListTarget, collect) (CardListItem);