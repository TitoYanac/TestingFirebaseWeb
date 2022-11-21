import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { mostrarMsj } from './mostrarMensaje.js'
const registroForm = document.querySelector("#registro-form");


registroForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    var email = document.querySelector("#registro_user").value;
    var password = document.querySelector("#registro_pass").value;


    try {
        const userCredential = await createUserWithEmailAndPassword( auth, email, password);
        console.log(userCredential);
        $('#registromodal').modal('hide');
        mostrarMsj('Usuario Creado!','success');
    } catch (error) {
        mostrarMsj(error.code,'failed');
    }
});