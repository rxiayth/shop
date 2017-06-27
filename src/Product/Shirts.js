import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shirts extends React.Component {

	render() {
		let dataLayer = this.props.dataLayer;
		console.dir(dataLayer)
		return (
			<div className="shirts">
				<h1>{dataLayer.page.name}</h1>
			</div>
		);
	}
}

Shirts.propTypes = {
	dataLayer: PropTypes.object.isRequired
}

export default Shirts;