import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqm5mqgHffVPQetmDF7xGrRK-1_e6NRIk",
  authDomain: "errormovie-d7486.firebaseapp.com",
  projectId: "errormovie-d7486",
  storageBucket: "errormovie-d7486.firebasestorage.app",
  messagingSenderId: "78642033284",
  appId: "1:78642033284:web:8d534b58213b129aa6c8d1",
  measurementId: "G-R7NQPQPYL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and Firestore with the app instance
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
