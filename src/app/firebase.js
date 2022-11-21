import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

  const firebaseConfig = {
        apiKey: "AIzaSyAvMlR70XR4nTStGkDaEEurRW2RwMzsTsE",
        authDomain: "dbtesting-c9107.firebaseapp.com",
        projectId: "dbtesting-c9107",
        storageBucket: "dbtesting-c9107.appspot.com",
        messagingSenderId: "603681291830",
        appId: "1:603681291830:web:8a20a15b9141cf9d04e297"
    };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
