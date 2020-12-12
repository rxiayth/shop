import React, { Component } from 'react'
import './index.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.update=this.update.bind(this);
		this.StyleSelected=this.StyleSelected.bind(this);
	}


	update(name, style) {
		return (e) => {
			let dataLayer = this.props.dataLayer;
			dataLayer.page.name = name;  //(e.target.id)
			this.props.update('dataLayer', dataLayer);			
			this.props.update('isSelected', name);
		}		
	}

	StyleSelected(page) {
		if (this.props.isSelected===page) {
			return {
	        	backgroundColor: 'lightblue'
	    	}
		} else {
			return {}
		}
	};


	render() {
		return (
			<div className="header">
				<li style={this.StyleSelected('Home')} ><h1 onClick={this.update('Home', { isSelected:'true'})}>Home</h1></li>
				<li style={this.StyleSelected('Account')}  onClick={this.update('Account', { isSelected:'true'})}>Account</li>
				<li style={this.StyleSelected('Product')}  onClick={this.update('Product', { isSelected:'true'})}>Product</li>
				{/* <li style={this.StyleSelected('Internet')}  onClick={this.update('Internet', { isSelected:'true'})}> Internet</li>
				<li style={this.StyleSelected('TV')}  onClick={this.update('TV', { isSelected:'true'})}>TV</li>
				<li style={this.StyleSelected('Accessories')}  onClick={this.update('Accessories', { isSelected:'true'})}>Accessories</li>
				<li style={this.StyleSelected('Deals')}  onClick={this.update('Deals', { isSelected:'true'})}>Deals</li>
				<li style={this.StyleSelected('Support')} onClick={this.update('Support', { isSelected: 'true' })}>Support</li>
				<li style={this.StyleSelected('Test')} onClick={this.update('Test', { isSelected: 'true' })}>Test</li> */}
			</div>
		)

	}
}



export default Header;