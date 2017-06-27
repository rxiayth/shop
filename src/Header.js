import React, { Component } from 'react'
import styles from './index.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.update=this.update.bind(this);
	}

	update(e) {
		this.props.update("dataLayer", 
			{
				dataLayer: {
					page: {
						name: e.target.id
					}
				}
			}
	)}

	render() {
		return (
			<div className="header">
				<li><h1>Shop</h1></li>
				<li id="Login" onClick={this.update}>Login</li>
				<li id="Shirts" onClick={this.update}>Shirts</li>
				<li id="Pants" onClick={this.update}> Pants</li>
				<li id="Shoes" onClick={this.update}>Shoes</li>
				<li id="Accessories" onClick={this.update}>Accessories</li>
				<li id="Deals" onClick={this.update}>Deals</li>
			</div>
		)

	}
}



export default Header;