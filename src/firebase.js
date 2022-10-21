
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmxw7p15zBlSlyyKSCVCwRvQG1H00eGzg",
  authDomain: "ulichat-680ab.firebaseapp.com",
  projectId: "ulichat-680ab",
  storageBucket: "ulichat-680ab.appspot.com",
  messagingSenderId: "542040167405",
  appId: "1:542040167405:web:df55de5d0f2cbca3528de4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() ;
export const storage = getStorage();
export const db=getFirestore();