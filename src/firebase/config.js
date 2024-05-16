import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID,
//     measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };


const firebaseConfig = {
    apiKey: "AIzaSyBvOqBOyWcEtz02GbJYdfRK0PqeiVLlYG8",
    authDomain: "olx-clone-97fa3.firebaseapp.com",
    projectId: "olx-clone-97fa3",
    storageBucket: "olx-clone-97fa3.appspot.com",
    messagingSenderId: "475710376075",
    appId: "1:475710376075:web:08dd37237975991435ac8e",
    measurementId: "G-B7XR15PEZE"
  };



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);