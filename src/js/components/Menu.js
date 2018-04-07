import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<ul className="list-group list-group-flush">
				<li className="list-group-item"><Link to="/">Home</Link></li>
				<li className="list-group-item"><Link to="/boards">Boards</Link></li>
			</ul>
		);
	}
}

export default Menu;