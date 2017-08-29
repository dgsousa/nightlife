const admin = require("firebase-admin");

const serviceAccount = require("./service_key");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nightlife-coordination-3dd0e.firebaseio.com/"
});

const database = admin.database();

module.exports = database;
