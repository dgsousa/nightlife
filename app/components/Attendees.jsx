import React from "react";
import {connect} from "react-redux";

const Attendees = ({attendees}) =>
	<span>
		{`${attendees.length} people are going`} 
	</span>;



const mapStateToProps = (state, ownProps) => ({
	attendees: Object.keys(state.toJS().members).filter(member => 
		state.toJS().members[member].destination === ownProps.result.name
	)
})

export default connect(
	mapStateToProps
)(Attendees);