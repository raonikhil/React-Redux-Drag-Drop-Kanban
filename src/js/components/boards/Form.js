import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addBoard } from "../../actions/boards";

const mapDispatchToProps = dispatch => {
	return {
		addBoard: board => dispatch(addBoard(board))
	};
};
class ConnectedForm extends Component {
	constructor() {
		super();
		this.state = {
			title: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		const { title } = this.state;

		if(this.state.title == '')
		{

		}
		else
		{
			const id = uuidv1();
			this.props.addBoard({ title, id, card_list: [] });
			this.setState({ title: "" });
		}
	}
	render() {
		const { title } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={this.handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-success btn-lg">
					SAVE
				</button>
			</form>
		);
	}
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;