import React, { Component } from 'react';
import Login from './Login';

class Account extends Component{
	
	constructor(props){
		super(props);
	}


	render() {
		if (this.props.dataLayer.user.isLoggedIn){
			return (
				<div className={this.props.dataLayer.page.name}>
					<h1>Welcome {this.props.dataLayer.user.name}</h1>
				</div>
			)
		} else {
			return (
				<Login
					dataLayer={this.props.dataLayer} 
				/>
			)

		}
	}
}

export default Account;