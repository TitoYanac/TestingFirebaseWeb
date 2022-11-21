import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { mostrarMsj } from './mostrarMensaje.js'

const fbbutton = document.querySelector('#fblogin');

fbbutton.addEventListener('click', async()=>{
    console.log("facebook button" );
    const provider = new FacebookAuthProvider();
    try {
        const userCredential = await signInWithPopup( auth, provider);
        console.log(userCredential);
        $('#loginmodal').modal('hide');
        mostrarMsj('Bienvenido '+ userCredential.user.displayName +'!','success');
    } catch (error) {
        mostrarMsj(error.code,'failed');

    }
});