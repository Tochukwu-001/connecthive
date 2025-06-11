// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Adfs3cp_cyv-CzCar7nqlFGMvD4Eung",
  authDomain: "connecthive-42162.firebaseapp.com",
  projectId: "connecthive-42162",
  storageBucket: "connecthive-42162.firebasestorage.app",
  messagingSenderId: "532497200023",
  appId: "1:532497200023:web:90cf8a61e295c7f5950ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}

