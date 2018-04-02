import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import { deleteCard } from "../../actions/cards";

const Types = {
	ITEM: 'Card'
}
const itemSource = {
	beginDrag(props) {

		const item = { cardItem: props.cardItem, listId: props.listId };
		return item;
	},
	endDrag(props, monitor, component) {
		if (!monitor.didDrop()) {
			return;
		}

		// When dropped on a compatible target, do something
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
	}
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteCard: (card) => dispatch(deleteCard(card))
	};
};

class ConnectedCard extends Component {
	constructor(props) {
		super(props);
		this.deleteCard = this.deleteCard.bind(this, this.props.cardItem);
	}

	deleteCard(card) {
		this.props.deleteCard(card);
	}

	render() {
		const { connectDragSource, cardItem } = this.props;

		let style = {
			opacity:1
		}
		return connectDragSource(
			<div draggable='true' style={style}>
				<div className="item">
					<div className="item-name">{cardItem.title}</div>
					<div className="item-container">
						<div className="item-avatar-wrap"><img src="37.jpg" alt="" /></div>
						<div className="item-content">
							<div className="item-author">Judd Reilly</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
						</div>
					</div>
					<div className="item-perfomers">
						<div className="delete-perfomers">
							<a href="#" onClick={this.deleteCard} >X Delete</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const Card = connect(null, mapDispatchToProps)(ConnectedCard);
export default  DragSource(Types.ITEM, itemSource, collect) (Card);