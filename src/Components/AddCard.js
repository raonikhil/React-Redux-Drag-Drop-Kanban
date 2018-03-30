import React, { Component } from 'react';
import uuid from 'uuid';

class AddCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newcardItem: {}
		}
	}

	handleSubmit(e) {

		e.preventDefault();
		if(this.refs.card_title.value === '') {

		} else {
			this.setState({
				newcardItem: {
					id: uuid.v4(),
					listID: this.refs.card_id.value,
					title: this.refs.card_title.value
				}
			}, function(){
				let id = this.refs.card_id.value;
				this.props.addCard(id, this.state.newcardItem);
				this.refs.card_title.value = ''
			});
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<input 
						type="hidden"
						ref="card_id"
						value={this.props.listItem.id}
					/>
					<input
						className="form-control"
						type="text"
						ref="card_title"
						placeholder="Add Card"
					  />
				 </div>
				
				 <button className="btn btn-sm btn-success">Save</button>
			</form>
		);
	}
}

export default AddCard;
