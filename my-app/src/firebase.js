// firebase.js (Firebase Setup)

// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm5lmkxpFvotoyx78KRqMgnRGu5X6yMrQ",
  authDomain: "task-manager-b1440.firebaseapp.com",
  projectId: "task-manager-b1440",
  storageBucket: "task-manager-b1440.appspot.com", // Fixed storageBucket format
  messagingSenderId: "594104241421",
  appId: "1:594104241421:web:f4362a736a5417e39ff444",
  measurementId: "G-WK8KQPTMVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Enable Firestore offline persistence
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("Offline persistence enabled");
  })
  .catch((err) => {
    console.error("Error enabling offline persistence:", err.code);
  });

export { app, db, analytics };
