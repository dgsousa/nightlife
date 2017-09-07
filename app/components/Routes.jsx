import React from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Place from "./Place.jsx";
import Form from "./Form.jsx";

import {login, createAccount} from "../actions/actionCreators";


const Routes = ({username, login, createAccount}) => 

	<div>
		{username && <Route component={Header}/>}
		<Switch>
			<Route path={"/places/:id"} component={Place}/>
			{username || <Route path={"/signup"} render={() => <Form submitForm={createAccount}/>}/>}
			{username ?  <Route path={"/"} component={Home}/> : <Route path={"/"} render={() => <Form submitForm={login}/>}/>}
		</Switch>
	</div>


const mapStateToProps = (state) => ({
	username: state.get("username") || null
})

export default withRouter(connect(
	mapStateToProps,
	{login, createAccount}
)(Routes));
