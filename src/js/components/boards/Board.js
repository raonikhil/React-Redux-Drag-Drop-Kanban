import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Menu from '../Menu';
import CardList from '../card-list/CardList';

const mapStateToProps = state => {
	return { boards: state.boards };
};

class BoardView extends Component {

	constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

	getBoard() {
		const { boards } = this.props.boards;
		const board_id = this.props.match.params.board_id
		const board = boards.filter(board => board.id === board_id);

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
			<div style={{height:'100%'}}>
				<Menu />
				<Button color="danger" onClick={this.toggle}>Launch Modal</Button>
				<main data-reactroot>
					{cardList}
				</main>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
			</div>
		);
	}
}

BoardView.propTypes = {

};

const Board = connect(mapStateToProps)(BoardView);
export default DragDropContext(HTML5Backend)(Board);