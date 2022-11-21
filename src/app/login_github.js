import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { mostrarMsj } from './mostrarMensaje.js'

const githubbutton = document.querySelector('#githublogin');

githubbutton.addEventListener('click', async()=>{
    console.log("github button" );
    const provider = new GithubAuthProvider();
    try {
        const userCredential = await signInWithPopup( auth, provider);
        console.log(userCredential);
        $('#loginmodal').modal('hide');
        mostrarMsj('Bienvenido '+ userCredential.user.displayName +'!','success');
    } catch (error) {
        mostrarMsj(error.code,'failed');

    }
});