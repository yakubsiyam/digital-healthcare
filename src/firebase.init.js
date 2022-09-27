import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFpieSB5-tsdxfgTIwLteqzTlV5DV6_Iw",
  authDomain: "digital-healthcare-480d2.firebaseapp.com",
  projectId: "digital-healthcare-480d2",
  storageBucket: "digital-healthcare-480d2.appspot.com",
  messagingSenderId: "266583811999",
  appId: "1:266583811999:web:2093228d14a61a5a3a3faa",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
