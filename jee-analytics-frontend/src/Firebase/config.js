// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFHp7l5SI-O8Eu0yu1EJwzA0YgRXMmYdc",
    authDomain: "jeeanalyticsbackend.firebaseapp.com",
    projectId: "jeeanalyticsbackend",
    storageBucket: "jeeanalyticsbackend.firebasestorage.app",
    messagingSenderId: "197322929570",
    appId: "1:197322929570:web:f2eccfb42ba5e892e5eefb",
    measurementId: "G-TP6S7DX27R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };