import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { mostrarMsj } from './mostrarMensaje.js'

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    var email = document.querySelector("#login_user").value;
    var password = document.querySelector("#login_pass").value;


    try {
        const userCredential = await signInWithEmailAndPassword( auth, email, password);
        console.log(userCredential);
        $('#loginmodal').modal('hide');
        mostrarMsj('Bienvenido!','success');
    } catch (error) {
        mostrarMsj(error.code,'failed');
    }
});