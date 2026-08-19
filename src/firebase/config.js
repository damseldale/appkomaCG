import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIY_x5Pj8o2kJfIxOP9KcPNTQdOiaxOsI",
  authDomain: "faucet-36e91.firebaseapp.com",
  projectId: "faucet-36e91",
  storageBucket: "faucet-36e91.firebasestorage.app",
  messagingSenderId: "195116175298",
  appId: "1:195116175298:web:1193334531dd98b30e105b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
