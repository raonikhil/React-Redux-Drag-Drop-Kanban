import React, { Component } from 'react';
import uuid from 'uuid';

class AddCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newlistItem: {}
		}
	}

	// addCardList(e) {
	handleSubmit(e) {
		if(this.refs.list_title.value === '') {

		} else {
			this.setState({
				newlistItem: {
					id: uuid.v4(),
					title: this.refs.list_title.value,
					cardItems: []
				}
			}, function(){
				this.props.addCardList(this.state.newlistItem);
				this.refs.list_title.value = ''
			});
		}
		e.preventDefault();
		console.log('submitted');
	}

  	render() {
		return (
		  <div className="desk" draggable="true">
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<input
						id="new-todo"
						className="form-control"
						type="text"
						ref="list_title"
						/*onChange={this.handleChange}
						value={this.state.text}*/
						placeholder="Add List"
					  />
				  </div>
				
				  <button className="btn btn-sm btn-success">Save</button>
			</form>
		</div>
		);
	}
}

export default AddCardList;
