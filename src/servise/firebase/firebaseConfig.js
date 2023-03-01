// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7jQyoaFPNHx_YNI0tONOkGIvW44hHRhA",
  authDomain: "backend34860-b0b9d.firebaseapp.com",
  projectId: "backend34860-b0b9d",
  storageBucket: "backend34860-b0b9d.appspot.com",
  messagingSenderId: "1033005912530",
  appId: "1:1033005912530:web:b7e26f05fd550a91a4f80b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)