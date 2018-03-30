import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

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

class Card extends Component {

	deleteCard(id, listId) {
		this.props.deleteCard(id, listId);
	}

	render() {
		const { connectDragSource } = this.props

		let style = {
			opacity:1
		}
		return connectDragSource(
			<div draggable='true' style={style}>
				<div className="item" id="37">
					<div className="item-name">{this.props.cardItem.title}</div>
					<div className="item-container">
						<div className="item-avatar-wrap"><img src="37.jpg" alt="" /></div>
						<div className="item-content">
							<div className="item-author">Judd Reilly</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
						</div>
					</div>
					<div className="item-perfomers">
						<div className="delete-perfomers">
							<a href="#" onClick={this.deleteCard.bind(this, this.props.cardItem.id, this.props.listId)} >X Delete</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default  DragSource(Types.ITEM, itemSource, collect) (Card);