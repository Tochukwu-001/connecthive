// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOUnbnwKd5HTrCsvnnz6lsWYmOjrO_g4w",
  authDomain: "connecthive-28293.firebaseapp.com",
  projectId: "connecthive-28293",
  storageBucket: "connecthive-28293.firebasestorage.app",
  messagingSenderId: "110474526047",
  appId: "1:110474526047:web:9131eb287f86f2d4868aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
