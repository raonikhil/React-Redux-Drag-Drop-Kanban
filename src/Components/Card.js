import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'

class Card extends Component {

	deleteCard(id, listId) {
		this.props.deleteCard(id, listId);
	}
	render() {
		let style = {
			opacity:1
		}
		return (
			<Draggable style={style}>
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
			</Draggable>
		);
	}
}

export default Card;
