import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Homepage from './Home/Homepage';
import Login from './Login';
import Mobility from './Product/Mobility';
import Internet from './Product/Internet';
import TV from './Product/TV';
import Accessories from './Product/Accessories';
import Deals from './Product/Deals';

class Main extends Component {
	
	constructor(props){
		super(props);
		
	}

	get PageComponents() {
		return {
			Homepage,
			Login,
			Mobility, 
			Internet,
			TV,
			Accessories,
			Deals
		}
	}

	renderPageComponent(productName){
		const Product = this.PageComponents[productName];
		return <Product 
					dataLayer={this.props.dataLayer} 
				/>;
	}
	
	render() {


		const pageName = this.props.dataLayer.page.name || "Homepage" ;

		return (
			<div>
				{/* <h1> {pageName + " " + "Page"}</h1>. */}
				{this.renderPageComponent(pageName)}

			</div>
		)
	}
}

Main.protoTypes = {
	dataLayer: PropTypes.object.isRequired

}

export default Main;