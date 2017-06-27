import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pants extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div> 
				<h1>{this.props.dataLayer.page.name}</h1>
			</div>
		)
	}

}

export default Pants;