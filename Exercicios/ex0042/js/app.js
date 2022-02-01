const list = document.querySelectorAll('.list');

const activeLink = () => {
    list.forEach((items => {
        items.classList.toggle('active');
    }))
}


list.forEach((items) => {
    items.addEventListener('click', activeLink)
})
