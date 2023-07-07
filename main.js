const btn = document.querySelector('.btn');
const cantidad = document.querySelector('#length');
const alert = document.querySelector('#alert');
let base = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!¡¿?{}[]/()&%$#ç';

btn.addEventListener('click', ()=>{
    if (cantidad.value < 20) {
        if(check1.checked){
            base += numbers;
        }
        if(check2.checked){
            base += symbols;
        }
        generatePassword();
    }else{
        alert.classList.remove('alert', 'alert-success');
        alert.classList.add('alert', 'alert-danger');
        alert.textContent = 'Debe ser conciso';
    }
})

const generatePassword = ()=> {
    let password = '';
    for (let i =0; i < cantidad.value; i++){
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    alert.classList.remove('alert', 'alert-danger');
}

window.addEventListener("DOMContentLoaded", () =>{
    btnGenerator.addEventListener('Click', () => {
        generatePassword();
    });
});