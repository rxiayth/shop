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
					name: ''
				}
			}
		}
		this.update=this.update.bind(this);
	}

	update(type,state) {
		if (type==="dataLayer") {
			this.setState({dataLayer:state.dataLayer});
			console.log('state updated: ');
			console.dir(state.dataLayer);
		}
		
	}
	
    render() {
        return (
            <div className="App">
                <Header
                	dataLayer={this.state.dataLayer} 
                	update={this.update}
                />
                <Main 
                	dataLayer={this.state.dataLayer}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
