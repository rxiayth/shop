import React, { Component } from 'react';
import DB from '../Database/DB_Mobility';
import Phone from './Phone';
import PropTypes from 'prop-types';

class Mobility extends Component {

	
	render() {
		// console.dir(DB);
		// console.dir(dataLayer)
		let dataLayer = this.props.dataLayer;
		
		Object.entries(DB).forEach(
		    ([brand, sku]) => {
		    	Object.entries(sku).forEach(
				    ([sku, val]) => console.log(sku, val)
				);
			}
		);

		return (
			<div className="Mobility">
				<h1>{dataLayer.page.name}</h1>
			</div>
		);
	}
}

Mobility.propTypes = {
	dataLayer: PropTypes.object.isRequired
}

export default Mobility;