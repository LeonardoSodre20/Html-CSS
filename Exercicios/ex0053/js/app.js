const buttonConfirmLogin = document.querySelector('[data-button-confirm]')
const inputUsuario = document.querySelector('[data-input-usuario]')
const inputPassword = document.querySelector('[data-input-password]')

const validInputData = () => {
    const isInputUsuarioValid = inputUsuario.value.trim()
    const isInputPassword = inputPassword.value.trim()

    if(!isInputUsuarioValid && isInputPassword){
        console.log(`Inputs Válido`)
        inputUsuario.classList.add('active-border-input')
    }
    else{
        console.log('Inputs Inválido')
    }
    console.log(`Usuário: ${isInputUsuarioValid} Senha: ${isInputUsuarioValid}`)
}


buttonConfirmLogin.addEventListener('click', (event) => {
    
    event.preventDefault();
    validInputData()
})
