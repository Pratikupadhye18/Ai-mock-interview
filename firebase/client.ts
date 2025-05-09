
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAPek20GeRwoLrPYRU4UjXOyXkLq3sU80",
    authDomain: "ai-interview-trainner.firebaseapp.com",
    projectId: "ai-interview-trainner",
    storageBucket: "ai-interview-trainner.firebasestorage.app",
    messagingSenderId: "230430228618",
    appId: "1:230430228618:web:ee47ddb40e61ba2a0e2d73",
    measurementId: "G-BV9WN7TRGP"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)