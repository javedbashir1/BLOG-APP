import {auth, signInWithEmailAndPassword,onAuthStateChanged } from '../firebase.js';

let formField = document.querySelectorAll('form input')
let [email,password] = formField;

let loginBtn = document.getElementById('login-btn')

 const login = () =>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => { 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 };

 loginBtn.addEventListener('click',login);


 onAuthStateChanged(auth, (user) => {
    if (user) {
     window.location.href = '../Dashboard/dashboard.html';
    } 
  });
  

