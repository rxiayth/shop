import React, { Component } from 'react';

class Account extends Component{
	
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className={this.props.dataLayer.page.name}>
				<h1>Welcome {this.props.dataLayer.user.name}</h1>
			</div>
		)
	}
}

export default Account;