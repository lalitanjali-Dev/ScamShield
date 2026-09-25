import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5IdVL-Qg2xe73WTP7Kte3RnwjVxCWKwg",
  authDomain: "scamshield-f6061.firebaseapp.com",
  projectId: "scamshield-f6061",
  storageBucket: "scamshield-f6061.firebasestorage.app",
  messagingSenderId: "563566858054",
  appId: "1:563566858054:web:4ebe4dfe5ba8325678df47"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);