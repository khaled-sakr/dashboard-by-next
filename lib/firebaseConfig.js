import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyCyxSCvE40LppE7PEbPFIC9k1lVPCfh74Q",
  authDomain: "vanilla-co.firebaseapp.com",
  projectId: "vanilla-co",
  storageBucket: "vanilla-co.appspot.com",
  messagingSenderId: "479440018953",
  appId: "1:479440018953:web:39f2589a29461372f862d8",
  measurementId: "G-000KRTL7RT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
