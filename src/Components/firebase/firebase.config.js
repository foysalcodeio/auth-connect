// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Ti7cpW7aCJLhL7HiFEfRbo25VkPqJhg",
  authDomain: "auth-connect-27a18.firebaseapp.com",
  projectId: "auth-connect-27a18",
  storageBucket: "auth-connect-27a18.appspot.com",
  messagingSenderId: "647777628238",
  appId: "1:647777628238:web:9c412ede4b3e5980ad531f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

