import React from "react";
import {connect} from "react-redux";
import {setDestination} from "../actions/actionCreators";

import Attendees from "./Attendees.jsx";

const Results = ({results, setDestination}) =>

	<div className="resultsList">
		<ul>
			{results.map((result, index) => 
				<li key={index}>
					<div>
						<Attendees result={result}/>
						<button value={result.name} onClick={setDestination}>{result.name}</button>
					</div>
				</li>
			)}
		</ul>
	</div>
		
const mapStateToProps = (state) => ({
	results: state.results
})




export default connect(
	mapStateToProps,
	{setDestination}
)(Results);