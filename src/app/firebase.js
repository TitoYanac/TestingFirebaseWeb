import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// firestore database
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


  const firebaseConfig = {
    };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  // Initialize firestore
export const db = getFirestore(app);
