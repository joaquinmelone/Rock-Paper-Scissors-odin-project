

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

function game() {

    let ScorePlayer = 0
    let ScoreComputer = 0
    let RoundNumber = 1

    for (let i = 0; i < 5; i++) {

        player = prompt()
        computer = getComputerChoice()

        if (playRound(player, computer) === true) {
            ScorePlayer++
            
            console.log(`Round ${RoundNumber}. You Win! ${player} beats ${computer}`)
        }
        else if (playRound(player, computer) === false) {
            ScoreComputer++

            console.log(`Round ${RoundNumber}. You Lose! ${computer} beats ${player}`)
        }
        else {
            console.log(`Round ${RoundNumber}. It's a draw!`)
        }

        RoundNumber++
    }

    if (ScorePlayer > ScoreComputer) {
        console.log(`FINAL RESULT: You've Won!`)
    }
    else if (ScorePlayer < ScoreComputer) {
        console.log(`FINAL RESULT: You've Lost!`)
    }
    else {
        console.log(`FINAL RESULT: Draw`)
    }
}

game()


