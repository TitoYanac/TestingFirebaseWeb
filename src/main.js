import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './app/firebase.js';
import './app/registroUsuario.js';
import './app/cerrarSesion.js';
import { logincheck } from './app/validarUsuario.js';

onAuthStateChanged(auth,async (user)=>{
    logincheck(user);
    if(user){
        console.log(user);
    }else{
        console.log("no existe usuario logeado");
    }
});