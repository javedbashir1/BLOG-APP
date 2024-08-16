
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyATHeBKL4_6VoM4DBv531z35DpmqUFv6jY",
    authDomain: "smit-app-90ba0.firebaseapp.com",
    projectId: "smit-app-90ba0",
    storageBucket: "smit-app-90ba0.appspot.com",
    messagingSenderId: "706537048727",
    appId: "1:706537048727:web:08c823278c267dfb9637d2",
    measurementId: "G-DPSQCCZDSD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

export {auth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}