// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIB83j7X24avlStQaRYmgntXVOPP9RkAM",
  authDomain: "ecommerce-coder-e67f2.firebaseapp.com",
  projectId: "ecommerce-coder-e67f2",
  storageBucket: "ecommerce-coder-e67f2.appspot.com",
  messagingSenderId: "421309201493",
  appId: "1:421309201493:web:25a3a6eba335864da528dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//FireStore initialize
const db = getFirestore(app);

export default db;