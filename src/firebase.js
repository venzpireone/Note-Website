import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARjZgQLfPSDD8V6noNbwJuCFYBvK4Ekrs",
  authDomain: "notewebapp-41960.firebaseapp.com",
  projectId: "notewebapp-41960",
  storageBucket: "notewebapp-41960.firebasestorage.app",
  messagingSenderId: "696997765869",
  appId: "1:696997765869:web:3a5bdeff46971e1d0ee2e4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };