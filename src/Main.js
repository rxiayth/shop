import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './Home/Home';
import Login from './Account/Login';
import Account from './Account/Account';
import Product from './Product/Product';
import Internet from './Product/Internet';
import TV from './Product/TV';
import Accessories from './Product/Accessories';
import Deals from './Product/Deals';
import Support from './Support/Support';

class Main extends Component {
	
	constructor(props){
		super(props);		
		this.submitForm = this.submitForm.bind(this);
		this.renderPageComponent=this.renderPageComponent.bind(this);
	}

	get PageComponents() {
		return {
			Home,
			Account,
			Product, 
			Internet,
			TV,
			Accessories,
			Deals,
			Support
		}
	}

	renderPageComponent(productName){
		const PageComponent = this.PageComponents[productName];
		return 	<PageComponent 
					dataLayer={this.props.dataLayer}
					submitForm={this.submitForm}
			 	/>;
	}

	submitForm(e){
		e.preventDefault();
		let dataLayer = this.props.dataLayer;
		let isSelected = this.props.isSelected;
		dataLayer.user.isLoggedIn=true;
		dataLayer.page.name="Account";
		isSelected="Account";
		// Object.assign(dataLayer.user,);
		this.setState({dataLayer});
		this.setState({isSelected});

		console.dir(this.props.dataLayer.user);
	}
	
	render() {
		const pageName = this.props.dataLayer.page.name || "Homepage" ;
		return (
			<div>
				{this.renderPageComponent(pageName)}
			</div>
		)
	}
}

Main.protoTypes = {
	dataLayer: PropTypes.object.isRequired

}

export default Main;