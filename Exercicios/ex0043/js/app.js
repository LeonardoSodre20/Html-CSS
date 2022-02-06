const inputTask = document.querySelector('[data-input-task]')
const buttonAddTask = document.querySelector('[data-button-task]')

const validateInput = () => inputTask.value.trim() > 0

const TaskCheckDescription = () => {
    const inputIsValid = validateInput()

    if(!inputIsValid) {
        return inputTask.value 
    }

}

buttonAddTask.addEventListener('click', () => TaskCheckDescription())