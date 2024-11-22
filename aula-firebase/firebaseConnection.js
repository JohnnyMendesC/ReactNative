// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-wFLfxZ0zwj44ploAsA0XbU6u0qo0DM0",
    authDomain: "aula-firebase-8af4a.firebaseapp.com",
    projectId: "aula-firebase-8af4a",
    storageBucket: "aula-firebase-8af4a.firebasestorage.app",
    messagingSenderId: "934314875917",
    appId: "1:934314875917:web:0576f25a965fe830474944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };