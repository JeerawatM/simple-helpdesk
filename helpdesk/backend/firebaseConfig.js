var admin = require("firebase-admin");

var serviceAccount = require("./testing-4a7ab-firebase-adminsdk-hekc8-867437f60e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
