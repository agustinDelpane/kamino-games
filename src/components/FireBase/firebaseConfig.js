// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8IpCAGcD6LEluYSzx8QX7hDBmgg4Suo",
  authDomain: "kamino-games-adch.firebaseapp.com",
  projectId: "kamino-games-adch",
  storageBucket: "kamino-games-adch.appspot.com",
  messagingSenderId: "953325883436",
  appId: "1:953325883436:web:1654b7105d197428914189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
