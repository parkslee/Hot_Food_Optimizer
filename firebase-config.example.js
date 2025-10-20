// Rename this file to firebase-config.js and fill in your Firebase project settings.
// The app expects window.__firebase_config to be a JSON string (so we JSON.stringify it below).
window.__firebase_config = JSON.stringify({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
});

// Optionally set an initial auth token (e.g., for custom auth). Leave null for anonymous sign-in.
window.__initial_auth_token = null;

// Optionally set __app_id
window.__app_id = "your-app-id";
