import React, { Component } from 'react';
import Menu from './Menu';

class Home extends Component {
	render() {
		return (
			<div className="col-md-12">
				<h2>Home</h2>
				<p>Welcome to Home page</p>
				<Menu />
			</div>
		);
	}
}

export default Home;