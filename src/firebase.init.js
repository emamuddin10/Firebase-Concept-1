// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiZTapRiZ-L8Jj3Y_SXmtWUTk1n_8EkCI",
  authDomain: "fir-concept-1-1705d.firebaseapp.com",
  projectId: "fir-concept-1-1705d",
  storageBucket: "fir-concept-1-1705d.firebasestorage.app",
  messagingSenderId: "719321547872",
  appId: "1:719321547872:web:c5800ae19474c1bd2faf05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
