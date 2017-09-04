import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {logout} from "../actions/actionCreators.js";

const Header = ({username, logout}) => username &&
	<div className="header">
		<Link to={"/"}>Home</Link>
		<button onClick={logout}>Logout</button>
	</div>

const mapStateToProps = (state) => ({
	username: state.username
})

export default connect(
	mapStateToProps,
	{logout}
)(Header);