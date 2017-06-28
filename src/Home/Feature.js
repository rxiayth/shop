import React, { Component } from 'react';

class Feature extends Component { 
	render() {
		return ( 
			<div className="feature" style={this.props.style}>
				<h2> Featuring something in Mobility <button> Order Now </button></h2>
				<h2> Featuring something in Internet <button> Order Now </button></h2>
			</div>
		)
	}
}

export default Feature;