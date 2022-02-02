

 const creditForm = document.querySelector('#sign-up-form'),
 inputUser = document.getElementById('user'),
 inputMail= document.getElementById('mail');

 creditForm.onsubmit = (e) => {
 e.preventDefault();

    let formData = new FormData(creditForm);
    const user = formData.get('user');
    const mail = formData.get('mail');


    let userdate = new User(usuario, email, 'sss');
    appendObjectToLocalStorage(user,'user');
}




