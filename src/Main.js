import React, { Component } from 'react';

class Main extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (

			<div>
				<h1>{this.props.dataLayer.page.name || "Main"} {"Page"}</h1>
			</div>
		)
	}
}

export default Main;