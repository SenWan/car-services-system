// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBvQu3G3HcxYNxPt98oOpOU6hGUmZzv70",
  authDomain: "car-services-system-1f619.firebaseapp.com",
  projectId: "car-services-system-1f619",
  storageBucket: "car-services-system-1f619.appspot.com",
  messagingSenderId: "809507490670",
  appId: "1:809507490670:web:18dd836e0ca02953994f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth