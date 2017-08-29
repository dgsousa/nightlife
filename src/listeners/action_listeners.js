const yelp = require("yelp-fusion");
const client = yelp.client("hBg60B0uCpTv9QKHx9xTU5cL2WegPNBjqnhGZ3VUjDUDRIvffXk1QlhpzGomgJpIjimbByN0YBgYYu3Qyw0gPyXnfGKNuIF7XF0-JKYXX3EJRn3NofrHy4l4pLeLWXYx")


const setDestinationActionListener = database => data => {
	const {user, destination} = data;
	database.ref("/members/" + user).transaction(state => destination);
}


const searchEventListener = socket => async data => {
	try {
		let results = await client.search(data);
		results = results.jsonBody.businesses;
		socket.emit("data", {
			type: "GET_RESULTS",
			results
		});
	} catch(err) {
		socket.emit("error", err);
	}
}


const signInActionListener = (socket, database) => async user => {
	const result = await database.ref("/members/" + user).once("value");
	socket.emit("data", {
		type: "SIGN_IN",
		user
	});
}	


module.exports = {
	setDestinationActionListener,
	searchEventListener,
	signInActionListener
};