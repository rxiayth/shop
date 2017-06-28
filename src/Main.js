import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Homepage from './Home/Homepage';
import Login from './Account/Login';
import Account from './Account/Account';
import Mobility from './Product/Mobility';
import Internet from './Product/Internet';
import TV from './Product/TV';
import Accessories from './Product/Accessories';
import Deals from './Product/Deals';
import Support from './Support/Support';

class Main extends Component {
	
	constructor(props){
		super(props);		
	}

	get PageComponents() {
		return {
			Homepage,
			Account,
			Mobility, 
			Internet,
			TV,
			Accessories,
			Deals,
			Support
		}
	}

	renderPageComponent(productName){
		const PageComponent = this.PageComponents[productName];
		return <PageComponent dataLayer={this.props.dataLayer} />;
	}
	
	render() {
		const pageName = this.props.dataLayer.page.name || "Homepage" ;
		return (
			<div className={pageName}>
				{this.renderPageComponent(pageName)}
			</div>
		)
	}
}

Main.protoTypes = {
	dataLayer: PropTypes.object.isRequired

}

export default Main;