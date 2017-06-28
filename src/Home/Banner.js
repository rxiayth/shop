import React, { Component } from 'react';

class Banner extends Component {
	render() { 
		return (
			<div className="Banner" style={this.props.style}>
				<h1>Banner Banner Banner <br/>
				 	Huge Promotion<br/>
				 	<button>Learn More</button>
				</h1>				
			</div>

		)
	}
}

export default Banner;