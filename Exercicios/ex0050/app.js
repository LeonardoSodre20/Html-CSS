const navListMenu = document.querySelector('[data-nav-list]')
const buttonMenuMobile = document.querySelector('[data-button-menu-mobile]')
const header = document.querySelector('[data-header]')

const configMenuMobile = () => {

    navListMenu.classList.toggle('active-menu-mobile')
    header.classList.toggle('active-header')
}

buttonMenuMobile.addEventListener('click', () => configMenuMobile())

