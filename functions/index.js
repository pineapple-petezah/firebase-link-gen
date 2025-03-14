const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.generateFirebaseLink = functions.https.onRequest((req, res) => {
  // Get project name from query string (e.g., /generateFirebaseLink?projectName=petezahgames10)
  const projectName = req.query.projectName;

  if (!projectName) {
    res.status(400).send('Project name is required');
    return;
  }

  // Construct the Firebase URL
  const firebaseLink = `https://${projectName}.web.app`;

  // Return the generated link
  res.send(`Generated Firebase Link: ${firebaseLink}`);
});
