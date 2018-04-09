import React, { Component } from 'react';
import Menu from './Menu';

class Home extends Component {
	render() {
		return (
			<div>
				<Menu />
				<div className="container">
					<h2>Home</h2>
					<p>Welcome to Home page</p>
				</div>
			</div>
		);
	}
}

export default Home;