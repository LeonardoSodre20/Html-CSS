const btnMobile = document.getElementById('btn-mobile');

const navBarMobile = (event) => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    if(event.type === 'touchstart')  event.preventDefault();
    
    event.currentTarget.setAttribute('aria-expanded', active);
    
    if(active) 
    {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }
    else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
   
}
btnMobile.addEventListener('click', navBarMobile);
btnMobile.addEventListener('touchstart', navBarMobile);