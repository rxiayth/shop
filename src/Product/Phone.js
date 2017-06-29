import React, { Component } from 'react';

class Phone extends Component {
	constructor(props){
		super(props);
	}

	render() { 
		return ( 
			<div className="Phone">
				<h2>{(Object.values(this.props.product)[0].name)}</h2>
			</div>
		)
	}
}

export default Phone;