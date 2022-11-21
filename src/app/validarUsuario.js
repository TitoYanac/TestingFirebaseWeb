const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

export const logincheck = user =>{
    if(user){
        loggedOutLinks.forEach(link => link.style.display = 'none');
        loggedInLinks.forEach(link => link.style.display = 'block');
    }else{
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none');
    }
};

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', async (e)=>{
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