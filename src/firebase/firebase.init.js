// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAld03bwwy4I3R5RNy1O4En3X5bi8uOseU",
  authDomain: "ema-john-firebase-d5fc1.firebaseapp.com",
  projectId: "ema-john-firebase-d5fc1",
  storageBucket: "ema-john-firebase-d5fc1.appspot.com",
  messagingSenderId: "438127558869",
  appId: "1:438127558869:web:4aa43cdf80c427cf8a625c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default app;