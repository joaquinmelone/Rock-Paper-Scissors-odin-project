

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let winner

    if (playerSelection === computerSelection) {
        return (`It's a draw!`)
    }

    else if (playerSelection === "scissors" & computerSelection === "rock") {
        return winner = true
    }

    else if (playerSelection === "rock" & computerSelection === "scissors") {
        return winner = false
    }

    else if (playerSelection === "paper" & computerSelection === "scissors") {
        return winner = false
    }

    else if (playerSelection === "rock" & computerSelection === "paper") {
        return winner = true
    }

    else if (playerSelection === "paper" & computerSelection === "rock") {
        return winner = false
    }

    else if (playerSelection === "scissors" & computerSelection === "paper") {
        return winner = true
    }
}


