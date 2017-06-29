import React, { Component } from 'react';

class Plan extends Component {
	
	constructor(props){
		super(props);
	}
	
	render () {
		return ( 
			<div>
				<h2>{ Object.values(this.props.plan)[0].name} </h2> 
			</div>
			

		)
	}
}

export default Plan;