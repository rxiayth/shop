import React, { Component } from 'react';

class Phone extends Component {
	render() { 
		return ( 
			<div className="Phone">
				<h5>{this.props.product.name}</h5>
			</div>
		)
	}
}

export default Phone;