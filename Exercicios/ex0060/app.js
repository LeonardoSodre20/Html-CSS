const music = document.querySelector('[data-audio="music"]')
const buttonPlay = document.querySelector('[data-button="button"]')
const buttonPause = document.querySelector('[data-button-pause="button"]')

const PlayMusic = () => {
    music.play()
}

const StopMusic = () => {
    music.pause()
}

buttonPlay.addEventListener('click', () => PlayMusic())
buttonPause.addEventListener('click', () => StopMusic())