// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-508e8.firebaseapp.com",
  projectId: "mern-auth-508e8",
  storageBucket: "mern-auth-508e8.appspot.com",
  messagingSenderId: "461614559792",
  appId: "1:461614559792:web:ca03e51702fa4bd9aaf3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;