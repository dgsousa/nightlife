import React from "react";
import {connect} from "react-redux";

const Attendees = ({attendees}) => {
	<span>
		{`${attendees.length} people are going`} 
	</span>;
}


const mapStateToProps = (state, ownProps) => (console.log(state.toJS()),{
	attendees: Object.keys(state.toJS()).members.filter(member => members[member].destination === ownProps.result.name)
})

export default connect(
	mapStateToProps
)(Attendees);