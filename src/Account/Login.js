import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.updateFormField=this.updateFormField.bind(this);
		this.submitForm=this.submitForm.bind(this);
	}

	submitForm(e){	
		this.props.submitForm(e);
	}

	updateFormField(type) {
		return (e) => {
			if (type==="Username"){
				this.props.dataLayer.user.name=e.target.value;
			}
			if (type==="Password"){
				this.props.dataLayer.user.password=e.target.value;
			}
		}
	}


	render() {
		return (
			<div className="Login">
				<form onSubmit={this.submitForm}>
					    <label /><b>Username</b>
					    <input onChange={this.updateFormField("Username")} type="text" placeholder="Enter Username" name="uname" required />
					    <br />
					    <label /><b>Password</b>
					    <input onChange={this.updateFormField("Password")} type="password" placeholder="Enter Password" name="psw" required />
					    <br />
					    <button type="submit" value="Login">Login</button>
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