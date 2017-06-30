import React, { Component } from 'react';

class Filter extends Component { 

	constructor(props){
		super(props);
		this.update=this.update.bind(this);
		this.StyleSelected=this.StyleSelected.bind(this);
		this.state = {
			"filter":""
		}


	}

	StyleSelected(brand) {
		if (this.state.filter===brand) {
			return {
	        	backgroundColor: 'lightblue'
	    	}
		} else {
			return {}
		}
	};

	update(filter){
		this.setState({filter});
	}


	render() {
		return ( 
			<div className="Filter">
				<button 
					onClick={()=>this.update(this.props.filter)} 
					style={this.StyleSelected(this.props.filter)}
					>{this.props.filter}</button>
			</div> 
		)
	}

}

export default Filter; 