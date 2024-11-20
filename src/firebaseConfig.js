// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCPsJVfrQqG_QbiCkzysYko0lBQT1A1Uw",
  authDomain: "doc-app-44735.firebaseapp.com",
  projectId: "doc-app-44735",
  storageBucket: "doc-app-44735.firebasestorage.app",
  messagingSenderId: "426779702935",
  appId: "1:426779702935:web:9b158cf1024cb582af5bd2",
  measurementId: "G-6RDF4CW97Y"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };