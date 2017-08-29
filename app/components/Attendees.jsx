import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Attendees = ({result, members}) => 
	<Link to={`${encodeURI(result.name)}`}>
		{Object.keys(members).filter(member => members[member] === result.name).length} people are going
	</Link>;


const mapStateToProps = (state) => ({
	members: state.members
})

export default connect(
	mapStateToProps
)(Attendees);