import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				username: "",
				password: "",
				isLoggedIn: false
			}
		}

		this.updateFormField=this.updateFormField.bind(this);
		this.submitForm=this.submitForm.bind(this);
	}

	submitForm(){
		let dataLayer = this.props.dataLayer;
		Object.assign(dataLayer, this.state.user);
		dataLayer.user.isLoggedIn=true;
		this.setState({dataLayer});


	}

	updateFormField(type,value) {
		if (type==="Username"){
			this.state.user.username=value;
		}
		if (type==="Password"){
			this.state.user.password=value;
		}
	}


	render() {
		return (
			<div className="Login">
				<form>
					    <label /><b>Username</b>
					    <input onChange={this.updateFormField("Username", 123)} type="text" placeholder="Enter Username" name="uname" required />
					    <br />
					    <label /><b>Password</b>
					    <input onChange={this.updateFormField("Username", 123)} type="password" placeholder="Enter Password" name="psw" required />
					    <br />
					    <button onSubmit={this.submitForm} >Login</button>
{/*
					    <input type="checkbox" checked="checked" defaultChecked  onChange={()=>{}} />
					    <br />
					    Remember me
					    <br />
					    <span className="psw"><a href="#">Forgot password?</a></span>

*/}
					    
					  
				</form>
			</div>

		)
	}
}

export default Login;