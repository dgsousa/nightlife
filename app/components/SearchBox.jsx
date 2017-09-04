import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";


import {getResults} from "../actions/actionCreators";
import {redirectToLogin, signOut} from "../src/authorization";


class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: "",
			term: ""
		}
		this.updateLocation = this.updateLocation.bind(this);
		this.updateTerm = this.updateTerm.bind(this);
		this.getSearchResults = this.getSearchResults.bind(this);
	}


	updateLocation(e) {
		const location = e.target.value;
		this.setState({location})
	}

	updateTerm(e) {
		const term = e.target.value;
		this.setState({term})
	}

	getSearchResults(e) {
		e.preventDefault();
		const {location, term} = this.state;
		this.props.getResults(location, term);
	}

	render() {
		const {location, term} = this.state;
		const {getResults} = this.props;
		return (
			<div className="search-form">
				<form>
					<div>
						<label htmlFor="location">Location</label>
						<input type="text" name="location" value={location} onChange={this.updateLocation}/>
					</div>
					<div>
						<label htmlFor="">Category</label>
						<input type="text" name="term" value={term} onChange={this.updateTerm}/>
					</div>
					<button onClick={this.getSearchResults}>Submit</button>
				</form>
			</div>
		)
	}
}


SearchBox = connect(
	null,
	{getResults}
)(SearchBox)

export default SearchBox;