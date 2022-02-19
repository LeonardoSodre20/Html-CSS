let timeOfTransition = 3000
let currentImageIndex = 0
const imagesContainer = document.querySelectorAll('img')
const maxImagesContainer = imagesContainer.length
console.log(maxImagesContainer)

const nextImageTransition = () => {
    imagesContainer[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= maxImagesContainer) currentImageIndex = 0

    imagesContainer[currentImageIndex].classList.add('selected')

}



const startImageTransition = () => {
    setInterval(() => {
        nextImageTransition()
    } , timeOfTransition)
}

window.addEventListener('load', startImageTransition())
