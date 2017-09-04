


const updateMemberDatabaseListener = (socket, database) =>
	["child_added", "child_changed"].forEach(event => {
		database.ref("/members").on(event, snap => {
			const key = snap.key;
			const {username, destination = null} = snap.val();
			socket.emit("data", {
				type: "UPDATE_MEMBER",
				key,
				username,
				destination
			})
		})
	})




module.exports = {
	updateMemberDatabaseListener
}