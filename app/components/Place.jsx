import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


const Place = ({result}) => <div><h1>{result.id}</h1></div>


const mapStateToProps = (state, ownProps) => ({
	result: state.get("results") && state.get("results").filter(result => result.id === ownProps.match.params.id)[0] || null
});


export default withRouter(connect(
	mapStateToProps
)(Place));