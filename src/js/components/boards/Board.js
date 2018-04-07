import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Menu from '../Menu';
import CardList from '../card-list/CardList';

const mapStateToProps = state => {
	return { boards: state.boards };
};

class BoardView extends Component {

	getBoard() {
		const { boards } = this.props.boards;
		const board_id = this.props.match.params.board_id
		const board = boards.filter(board => board.id == board_id);

		let cardList; 
		if(board)
		{
			cardList = board.map( el => {
				return (
					<CardList key={el.id} boardId={el.id} />
				);
			});
		}
		return cardList;
	}
	render() {
		const cardList = this.getBoard();
		return (
			<main data-reactroot>
				<Menu />
				{cardList}
			</main>
		);
	}
}

BoardView.propTypes = {

};

const Board = connect(mapStateToProps)(BoardView);
export default DragDropContext(HTML5Backend)(Board);