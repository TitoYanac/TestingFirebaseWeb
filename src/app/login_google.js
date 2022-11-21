import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { mostrarMsj } from './mostrarMensaje.js'

const googlebutton = document.querySelector('#googlelogin');

googlebutton.addEventListener('click', async()=>{
    console.log("google button" );
    const provider = new GoogleAuthProvider();
    try {
        const userCredential = await signInWithPopup( auth, provider);
        console.log(userCredential);
        $('#loginmodal').modal('hide');
        mostrarMsj('Bienvenido '+ userCredential.user.displayName +'!','success');
    } catch (error) {
        mostrarMsj(error.code,'failed');

    }
});