// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfEIe6j-1tPFUtYC9o3pZMhDJCZCz_34I",
  authDomain: "connecthive-a6d8c.firebaseapp.com",
  projectId: "connecthive-a6d8c",
  storageBucket: "connecthive-a6d8c.firebasestorage.app",
  messagingSenderId: "479365990332",
  appId: "1:479365990332:web:fdf58680dcb6016e9d4db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}