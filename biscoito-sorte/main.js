// VARIAVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnAgain = document.querySelector("#btnAgain")
const image = document.querySelector("#image")
const text = document.querySelector("#text")

     


// EVENTOS

btnAgain.addEventListener('click', handleResetClick)
image.addEventListener('click', handleTryClick)


// FUNÇÔES


function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function handleResetClick () {
    toggleScreen()
}
function handleTryClick (event) {
    event.preventDefault()
    toggleScreen()
}