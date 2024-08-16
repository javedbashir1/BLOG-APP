
import {auth,createUserWithEmailAndPassword,onAuthStateChanged} from '../firebase.js';

let formField = document.querySelectorAll('form input')
let [email,password] = formField;
let signupBtn = document.getElementById('signup-btn')

const signup = ()=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

signupBn.addEventListener('click',signup);

onAuthStateChanged(auth, (user) => {
    if (user) {
     window.location.href='../Dashboard/dashboard.html';
    } 
  });
  

