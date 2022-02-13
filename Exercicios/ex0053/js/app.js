const buttonConfirmLogin = document.querySelector('[data-button-confirm]')
const inputUsuario = document.querySelector('[data-input-usuario]')
const inputPassword = document.querySelector('[data-input-password]')

const loginConfirmed = () => {
    console.log(`Usuário: ${inputUsuario.value}`)
    console.log(`Senha: ${inputPassword.value}`)
    inputPassword.value = ""
    inputUsuario.value = ""
}

const validInput = () => {
    const isValid = inputUsuario.value.trim() > 0

    if(isValid){
        inputUsuario.classList.add('validInputCheck')
    }
}

validInput()

buttonConfirmLogin.addEventListener('click', (event) => {
    
    event.preventDefault();
    loginConfirmed();
    
})
