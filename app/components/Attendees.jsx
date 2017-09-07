import React from "react";
import {connect} from "react-redux";

const Attendees = ({attendees}) =>
	<span>
		{`${attendees.length} people are going`} 
	</span>;



const mapStateToProps = (state, ownProps) => ({
	attendees: Object.keys(state.members).filter(member => 
		state.members[member].destination === ownProps.result.name)
})

export default connect(
	mapStateToProps
)(Attendees);