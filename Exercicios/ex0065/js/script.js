const containerMain = document.querySelector(".container-main");
const inputValue = document.querySelector(".input-name");
const buttonInsertName = document.querySelector(".insert-name");
const campNameInsert = document.querySelector(".name-item");
let numberAdd = 0;
let checkTimer = false;
containerMain.addEventListener("click", () => {
    const changeText = containerMain.innerHTML = "Mudou!";
    containerMain.classList.toggle("item-change-color");
})

const getInputValue = () => {
    const valueInput = inputValue.value;

    campNameInsert.innerHTML = valueInput;

    console.log("clicou!");
}

buttonInsertName.addEventListener("click", getInputValue);

const changeTime = () => {
    numberAdd += 1;
    console.log(numberAdd);

    if(numberAdd > 10)
    {
        checkTimer = true;

        if(checkTimer)
        {
            console.log("Variavel bool ativada");
        }
    }
}

setInterval(changeTime, 1000);

