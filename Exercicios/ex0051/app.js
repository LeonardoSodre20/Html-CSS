const buttonMobile = document.querySelector('.btn-mobile');

const openMenuMobile = () => {
    const menuList = document.querySelector('.menu-list')
    menuList.classList.toggle('active-menu')
}

buttonMobile.addEventListener('click', () => openMenuMobile())