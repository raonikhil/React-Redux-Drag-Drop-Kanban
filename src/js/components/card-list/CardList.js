import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardListItem from './CardListItem';
import AddCardList from './AddCardList';
import { moveCard } from "../../actions/cards";

const mapStateToProps = state => {
	return { card_list: state.cardList };
};

const mapDispatchToProps = dispatch => {
	return {
		moveCard: (card, toListItemId) => dispatch(moveCard(card, toListItemId))
	};
};

class ConnectedCardList extends Component {
	constructor(props) {
		super(props);
	}
	
	getCardList()
	{
		const { card_list } = this.props.card_list;
		const boardId = this.props.boardId
		const listItems = card_list.filter(card_list => card_list.boardId == boardId);

		/*let listItems;
		if(board.card_list) {
			listItems = board.card_list.map( listItem => {
				return (
					<CardListItem
						key={listItem.id}
						listItem={listItem}
					/>
				)
			});
		}*/
		return listItems;
	}
	
	render() {
		let listItems = this.getCardList();

		return (
			<div className="card-board-list">
				{listItems.map( listItem => (
					<CardListItem
						key={listItem.id}
						listItem={listItem}
						moveCard={this.props.moveCard}
					/>
				))}
				<AddCardList boardId={this.props.boardId} />
			</div>
		);
	}
}

const CardList = connect(mapStateToProps, mapDispatchToProps)(ConnectedCardList);
export default CardList;