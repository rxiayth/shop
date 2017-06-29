import React, { Component } from 'react';
import DB from '../Database/DB_Mobility';
import Phone from './Phone';
import PropTypes from 'prop-types';

class Mobility extends Component {

	constructor(props){
		super(props);
	}

	get Phones(){ 
		let phones = [];
		Object.entries(DB).forEach(
			([brand, sku]) => {
		    	Object.entries(sku).forEach(
				    ([sku, val]) => {
				    	let phone = {}
				    	phone[sku] = val;
				    	phones.push(phone);
				    }
				);
			}
		)
		console.log(phones);
		return phones;
	}
	
	render() {
		return (
			<div className="Mobility">
				{this.Phones.map( (phone) => (<Phone product={phone} />) )}
			</div>
		);
	}
}

Mobility.propTypes = {
	dataLayer: PropTypes.object.isRequired
}

export default Mobility;