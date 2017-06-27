import React, { Component } from 'react'
import './index.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.update=this.update.bind(this);
	}

	update(name) {
		return (e) => {
			this.props.update("dataLayer", 
				{
					dataLayer: {
						page: {
							// name: e.target.id
							name
						}
					}
				}
			
			)
		}
		// this.props.dataLayer.page.name = e.target.id;
		// this.forceUpdate();
	}

	render() {
		return (
			<div className="header">
				<li><h1 onClick={this.update('Homepage')}>Shop</h1></li>
				<li onClick={this.update('Login')}>Login</li>
				<li onClick={this.update('Shirts')}>Shirts</li>
				<li onClick={this.update('Pants')}> Pants</li>
				<li onClick={this.update('Shoes')}>Shoes</li>
				<li onClick={this.update('Accessories')}>Accessories</li>
				<li onClick={this.update('Deals')}>Deals</li>
			</div>
		)

	}
}



export default Header;