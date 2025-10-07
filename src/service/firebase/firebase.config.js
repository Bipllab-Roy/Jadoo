// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   measurementId: import.meta.env.VITE_measurementId
// };

const firebaseConfig = {
apiKey:  "AIzaSyCZww9oFwQczmoJgCMSBXm428rRDkTXbKE",
authDomain:  "jadoo-8a027.firebaseapp.com",
projectId:  "jadoo-8a027",
storageBucket:  "jadoo-8a027.firebasestorage.app",
messagingSenderId:  "378037372643",
appId:  "1:378037372643:web:ccc410034fa8d890dba7d6",
measurementId:  "G-31EX0581W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);