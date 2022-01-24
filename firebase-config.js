// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6QPd1fz6s5Bfa3CgH5YVHSTDTqOyIOXs",
  authDomain: "foodable-2bae3.firebaseapp.com",
  projectId: "foodable-2bae3",
  storageBucket: "foodable-2bae3.appspot.com",
  messagingSenderId: "351366025190",
  appId: "1:351366025190:web:6ab736f20e9230f8f01027",
  measurementId: "G-TMJSRM25TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);