# Bakery Shift Optimizer — Deployment Bundle

This bundle contains the `index.html` web app and supporting example configs to help deploy to Firebase Hosting or run locally.

## Files included
- `index.html` — Main app (uses Tailwind via CDN and Lucide icons).
- `firebase-config.example.js` — Example file. Rename to `firebase-config.js` and fill with your Firebase project config to enable Firestore and Auth.
- `firebase.json` — Firebase Hosting configuration (serves `index.html`).
- `.firebaserc` — Example Firebase project alias file.

## Quick local test (no Firebase)
1. Open `index.html` in your browser (double click or drag to browser).
2. The app will run with local mock data. Firestore features won't work until you add your config.

## Deploy to Firebase Hosting
1. Install Firebase CLI if you haven't: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize (if needed): `firebase init hosting` (choose 'Use existing project' and select your project)
4. Copy `firebase-config.example.js` -> `firebase-config.js`, fill in your project's config.
5. Deploy: `firebase deploy --only hosting`

## Notes
- The app expects `window.__firebase_config` to be a JSON string (see `firebase-config.example.js`). If you prefer another method, edit `index.html` accordingly.
- If you want the Firestore data to persist, ensure `firebase-config.js` is correct and your Firestore rules allow reads/writes for the auth method used (the app defaults to anonymous sign-in).

---
Generated bundle on the server by ChatGPT.
