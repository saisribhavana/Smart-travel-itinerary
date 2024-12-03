// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDw_h6J9oAg_2HdpsDpPtsKIn-v0qOV14M",
//   authDomain: "tubeguruji-startups.firebaseapp.com",
//   projectId: "tubeguruji-startups",
//   storageBucket: "tubeguruji-startups.appspot.com",
//   messagingSenderId: "706430327770",
//   appId: "1:706430327770:web:08482219ed803a0aad3ee3",
//   measurementId: "G-40ZKDR29LV"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBfCz90bJAVkkyFJFu0wS2HeDVScnacv6c",
  authDomain: "ai-trip-planner-3eaf7.firebaseapp.com",
  projectId: "ai-trip-planner-3eaf7",
  storageBucket: "ai-trip-planner-3eaf7.appspot.com",
  messagingSenderId: "378408851724",
  appId: "1:378408851724:web:66e87433480eb541051129",
  measurementId: "G-TZ9CD1X8HD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);