// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjZgQLfPSDD8V6noNbwJuCFYBvK4Ekrs",
  authDomain: "notewebapp-41960.firebaseapp.com",
  projectId: "notewebapp-41960",
  storageBucket: "notewebapp-41960.appspot.com",
  messagingSenderId: "696997765869",
  appId: "1:696997765869:web:3a5bdeff46971e1d0ee2e4",
  measurementId: "G-860QD1KMZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };