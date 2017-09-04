import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";


class Form extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}
		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.submit = this.submit.bind(this);
	}

	updateUsername(e) {
		const username = e.target.value;
		this.setState({username});
	}

	updatePassword(e) {
		const password = e.target.value;
		this.setState({password});
	}

	submit(e) {
		e.preventDefault();
		const {username, password} = this.state;
		username && password && this.props.submitForm(username, password);
	}

	render() {
		const {username, password} = this.state;
		const {message, url} = this.props;
		return (
			<div className="signUp-form">
				<form>
					<input type="text" name="username" placeholder="name" value={username} onChange={this.updateUsername}/>
					<input type="text" name="password" placeholder="password" value={password} onChange={this.updatePassword}/>
					<span>{message}</span>
				</form>
				<button onClick={this.submit}>Submit</button>
				{url !== "/signup" && <Link to={"/signup"}>Register Here</Link>}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	message: state.message,
	submitForm: ownProps.submitForm,
	url: ownProps.match.url
})

export default withRouter(connect(
	mapStateToProps
)(Form));



