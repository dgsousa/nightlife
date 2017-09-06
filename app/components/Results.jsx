import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {setDestination} from "../actions/actionCreators";
import Attendees from "./Attendees.jsx";

const Results = ({results, setDestination}) =>

	<div className="resultsList">
		<ul>
			{results.map((result, index) => 
				<li key={index}>
					<div className="result">
						<Link to={`/places/${result.id}`}>{result.name}</Link>
						<Attendees result={result} />
						<button value={result.name} onClick={setDestination}>+</button>
					</div>
				</li>
			)}
		</ul>
	</div>
		
const mapStateToProps = (state) => ({
	results: state.get("results")
})




export default connect(
	mapStateToProps,
	{setDestination}
)(Results);