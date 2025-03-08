// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDueZq7Bner_0manN-3Qqn6dU5Ef-kpjWI",
  authDomain: "documentation-86f09.firebaseapp.com",
  projectId: "documentation-86f09",
  storageBucket: "documentation-86f09.firebasestorage.app",
  messagingSenderId: "461768249089",
  appId: "1:461768249089:web:ab7e15b9ac285cd6695500",
  measurementId: "G-EF3N3TYL0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, getDoc };
