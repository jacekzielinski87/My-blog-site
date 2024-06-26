import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD94h9k6IEzsSrbZMkRcD0tL9wzkmh6XLk",
  authDomain: "my-blog-site-6a783.firebaseapp.com",
  projectId: "my-blog-site-6a783",
  storageBucket: "my-blog-site-6a783.appspot.com",
  messagingSenderId: "891892241678",
  appId: "1:891892241678:web:814510949351530c40335f"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();