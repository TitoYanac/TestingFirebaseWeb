import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import { auth,db } from './app/firebase.js';
import './app/usuario_registro.js';
import './app/usuario_logout.js';
import './app/usuario_login.js';
import './app/login_google.js';
import './app/login_fb.js';
import './app/login_github.js';
import { setupPosts } from './app/mostrarPublicaciones.js';

import { logincheck } from './app/usuario_validacion.js';

onAuthStateChanged(auth,async (user)=>{
    
    if(user){
        const querySnapshot = await getDocs(collection(db,'posts'));
        setupPosts(querySnapshot.docs);
    }else{
        setupPosts([]);
    }
    logincheck(user);
});

