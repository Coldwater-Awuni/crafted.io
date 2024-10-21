
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBA7gzNRPAIFyBvrtfsVC2hAa_CwFpk6tg",
    authDomain: "craft-dhabitat.firebaseapp.com",
    projectId: "craft-dhabitat",
    storageBucket: "craft-dhabitat.appspot.com",
    messagingSenderId: "1647645978",
    appId: "1:1647645978:web:49e9359d28ea55ee5888a3",
    measurementId: "G-58S5X9C46H"
  };

// Initialize Firebase
let app;
try {
    app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully.");
} catch (error) {
    console.error("Error initializing Firebase: ", error);
}

// Check if Firebase app has been initialized correctly
if (app) {
    console.log("Firebase app instance: ", app);
} else {
    console.error("Firebase initialization failed.");
}

const db = firebase.firestore();
const subscriptionsRef = db.collection("newsletterSubscriptions");
// const contact_message = dp.collection("messages");