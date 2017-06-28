import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mobility extends React.Component {

	render() {
		let dataLayer = this.props.dataLayer;
		console.dir(dataLayer)
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