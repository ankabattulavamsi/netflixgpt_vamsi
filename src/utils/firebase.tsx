// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWiDwD9ElcEUkxMhybp2QXmJNTxkNpQ1c",
  authDomain: "netflixgpt-d9312.firebaseapp.com",
  projectId: "netflixgpt-d9312",
  storageBucket: "netflixgpt-d9312.appspot.com",
  messagingSenderId: "9011369730",
  appId: "1:9011369730:web:22006f6a41d9562117941b",
  measurementId: "G-ECMVWH5CZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
