// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRDZBocl1msYJMlrNXq5kUS87FkY5tIM",
  authDomain: "chive-af338.firebaseapp.com",
  projectId: "chive-af338",
  storageBucket: "chive-af338.firebasestorage.app",
  messagingSenderId: "1009110580696",
  appId: "1:1009110580696:web:83215c660926fa3e2786ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}