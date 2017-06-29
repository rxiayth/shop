import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			dataLayer: {
				page: {
					name: 'Internet'
				},
				user: {
					name: "",
					isLoggedIn: false
				}
			},	
			isSelected: "Internet"
			
		}
		this.update=this.update.bind(this);
	}

	update(type,state) {
		if (type === "dataLayer") {
			let dataLayer = state;
			this.setState({dataLayer});
			console.table({dataLayer});
		}
		if (type === "isSelected") {
			let isSelected = state;
			this.setState({isSelected});
			// console.log('state isSelected updated: ' + isSelected);
		}
	}
	
    render() {
        return (
            <div className="App">
                <Header
                	dataLayer={this.state.dataLayer} 
                	update={this.update}
                	isSelected={this.state.isSelected} 
                />
                <Main 
                	dataLayer={this.state.dataLayer}
                	isSelected={this.state.isSelected} 
                />
                <Footer />
            </div>
        );
    }
}

export default App;
