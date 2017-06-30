import React, { Component } from 'react';
import DB from '../Database/DB_Mobility';
import Phone from './Phone';
import Filter from '../Filter';
import PropTypes from 'prop-types';

class Mobility extends Component {

	get Phones(){ 
		let phones = [];
		Object.entries(DB).forEach(		
		    ([sku, val]) => {
		    	let phone = {}
		    	phone[sku] = val;
		    	phones.push(phone);
		    }
		)
		// console.log(phones);
		return phones;
	}

	get Filters(){ 
		let filters = [];
		let phones = this.Phones;
		phones.map( (phone)=> { 
			let brand = Object.values(phone)[0].brand;
			if (!filters.includes(brand)){
				filters.push(brand);
			}
		});
		return filters;
	}
	
	render() {
		return (
			<div className="Mobility">
				<h1>Phones</h1>
				{this.Filters.map( (filter) => <Filter key={filter} filter={filter} /> )}
				{this.Phones.map( (phone) => <Phone key={Object.keys(phone)[0]} product={phone} /> )}
			</div>
		);
	}
}

Mobility.propTypes = {
	dataLayer: PropTypes.object.isRequired
}

export default Mobility;