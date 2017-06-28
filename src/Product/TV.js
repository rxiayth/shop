import React, { Component } from 'react';

class TV extends Component {
	render() {
		return (
			<div className="TV">
				<h1>{this.props.dataLayer.page.name}</h1>
			</div>
		)
	}
}

export default TV;