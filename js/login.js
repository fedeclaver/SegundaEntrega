// login
const formLogin = document.querySelector('#sign-up-form'),
    inputUsername = document.getElementById('Username'),
    inputEmail = document.getElementById('Email'),
    inputPassword = document.getElementById('password');

formLogin.onsubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(formLogin)
    let datosLogin = {
        usuario: formData.get('Username'),
        email: formData.get('Email'),
        password: formData.get('password')

    Sesion.iniciarSesion(username, password, email); 
}

/**
 * Función que se encarga de cargar los datos almacenados en localStorage
 */
const iniciar = () => {
    GestionUsuarios.iniciar();
    localStorage.removeItem(`Usuario-Actual`);
    const recordarUsuario = localStorage.getItem('Recuerdame');
    const inputUsuario = document.querySelector(`#user`);
    const inputPassword = document.querySelector(`#password`);
    if(recordarUsuario){
        const usuarioGuardado = localStorage.getItem(`Usuario-Guardado`);
        const passwordGuardado = localStorage.getItem(`Contraseña-Guardada`);
        inputUsuario.value = usuarioGuardado;
        inputPassword.value = passwordGuardado;
    }
    // Evento que se encarga de otener los datos del formulario de login al presionar el botón Enviar
    $('#loginForm').on('submit', obtenerDatosFormulario); 
}

// Este evento carga la información desde el localStorage
$(() => iniciar());