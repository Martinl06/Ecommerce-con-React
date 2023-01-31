import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCDzLK2g6Kry6HUlxljT2MeJSVrt_W1H8k",
    authDomain: "ecommerceprueba-49a67.firebaseapp.com",
    projectId: "ecommerceprueba-49a67",
    storageBucket: "ecommerceprueba-49a67.appspot.com",
    messagingSenderId: "574376879982",
    appId: "1:574376879982:web:f049d1e77406a89932c37f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)