import React, { Component } from 'react'
import './index.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.update=this.update.bind(this);
	}


	update(name, style) {
		return (e) => {
			let dataLayer = this.props.dataLayer;
			dataLayer.page.name = name;  //(e.target.id)
			this.props.update('dataLayer', dataLayer);
			
			this.props.update('isSelected', name);
		}		
	}

	get StyleSelected() {
		return {
        	backgroundColor: 'lightblue'
    	}
	};

	//put in list and dynamically render css


	render() {
		return (
			<div className="header">
				<li><h1 onClick={this.update('Homepage', { isSelected:'true'})}>Homepage</h1></li>
				<li onClick={this.update('Account', { isSelected:'true'})}>Account</li>
				<li onClick={this.update('Mobility', { isSelected:'true'})}>Mobility</li>
				<li onClick={this.update('Internet', { isSelected:'true'})}> Internet</li>
				<li onClick={this.update('TV', { isSelected:'true'})}>Shoes</li>
				<li onClick={this.update('Accessories', { isSelected:'true'})}>Accessories</li>
				<li onClick={this.update('Deals', { isSelected:'true'})}>Deals</li>
			</div>
		)

	}
}



export default Header;