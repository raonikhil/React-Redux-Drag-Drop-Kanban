import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Menu extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">React Js - Trello</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>

							<NavLink exact={true} activeClassName='active' to='/' className="nav-link">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink exact={true} activeClassName='active' to="/boards" className="nav-link">Boards</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Option 1
								</DropdownItem>
								<DropdownItem>
									Option 2
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Reset
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default Menu;