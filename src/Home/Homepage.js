import React, { Component } from 'react';
import Banner from './Banner';
import Feature from './Feature';

class Homepage extends React.Component {

	constructor(props){
		super(props);
		this.Style = this.Style.bind(this);
	}

	Style(component) {
		if (component === "Banner"){
			return (
				{
		        	backgroundColor: 'aquamarine'
		    	}
			)
		}
		if (component === "Feature"){
			return (
				{
		        	backgroundColor: 'darkcyan'
		    	}
			)
		}
	}

	render() {
		return (
			<div className='homepage'>
			    <Banner style={this.Style('Banner')} />
			    <Feature style={this.Style('Feature')} />
			</div>
		);
	}
}


export default Homepage;