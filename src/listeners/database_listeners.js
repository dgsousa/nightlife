


const setDestinationDatabaseListener = (socket, database) =>
	["child_added", "child_changed"].forEach(event => {
		database.ref("/members").on(event, snap => {
			const user = snap.key;
			const destination = snap.val();
			socket.emit("data", {
				type: "SET_DESTINATION",
				user,
				destination
			})
		})
	})



module.exports = {
	setDestinationDatabaseListener
}