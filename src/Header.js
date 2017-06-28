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

	//put in list and dynamically render css


	render() {
		return (
			<div className="header">
				<li style={this.StyleSelected('Homepage')} ><h1 onClick={this.update('Homepage', { isSelected:'true'})}>Homepage</h1></li>
				<li style={this.StyleSelected('Account')}  onClick={this.update('Account', { isSelected:'true'})}>Account</li>
				<li style={this.StyleSelected('Mobility')}  onClick={this.update('Mobility', { isSelected:'true'})}>Mobility</li>
				<li style={this.StyleSelected('Internet')}  onClick={this.update('Internet', { isSelected:'true'})}> Internet</li>
				<li style={this.StyleSelected('TV')}  onClick={this.update('TV', { isSelected:'true'})}>Shoes</li>
				<li style={this.StyleSelected('Accessories')}  onClick={this.update('Accessories', { isSelected:'true'})}>Accessories</li>
				<li style={this.StyleSelected('Deals')}  onClick={this.update('Deals', { isSelected:'true'})}>Deals</li>
			</div>
		)

	}
}



export default Header;