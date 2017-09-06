import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {logout} from "../actions/actionCreators.js";

const Header = ({logout}) =>
	<div className="header">
		<Link to={"/"}>Home</Link>
		<button onClick={logout}>Logout</button>
	</div>



export default connect(
	null,
	{logout}
)(Header);