import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SearchPage from "./SearchPage.jsx";



const App = () =>
	<div>
		<Router>
			<Switch>
				<SearchPage exact path="/"/>
			</Switch>
		</Router>
	</div>

export default App;