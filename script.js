

function getComputerChoice() {
    randomNumber = parseInt(Math.random() * 3)
    choice = ""

    if (randomNumber === 0) {
        choice = "rock"
    }
    else if (randomNumber === 1) {
        choice = "paper"
    }
    else if (randomNumber === 2) {
        choice = "scissors"
    }

    return choice

}


