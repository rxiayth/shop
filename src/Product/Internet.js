import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Internet extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Internet"> 
				<h1>{this.props.dataLayer.page.name}</h1>
			</div>
		)
	}

}

export default Internet;