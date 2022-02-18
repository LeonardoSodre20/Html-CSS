const buttonMenuMobile = document.querySelector('[data-button-mobile]')

const navListMenu = document.querySelector('[data-nav-list]')

const openMenuMobile = () => {
    navListMenu.classList.toggle('active-menu-mobile')
}

buttonMenuMobile.addEventListener('click', () => openMenuMobile())