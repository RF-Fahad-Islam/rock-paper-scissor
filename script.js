// Defining Variables
let user = "rock"
let r = Math.random()
// console.log(r);
let computer;
let round = 6
let folderName = "images"
let i = 1;
let victory;
let imageName;
let winner, roundWinner;
let num;
let userWins = 0
let computerWins = 0;
let userChoice = document.getElementById("userChoice")
let computerChoice = document.getElementById("computerChoice")
let roundShow = document.getElementById("round")
let winState = document.getElementById("winState")
let ties = document.getElementById("ties")
let winnerShow = document.getElementById("winner")
let myModal = new bootstrap.Modal(document.getElementById('modal1'))

// Function to make choice based on random num between 1-3
function makeAChoice(num) {
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

// A function to return true or false. "true" is for user win and "false" is for user lose
function win(user, computer) {
    if (user !== computer) {
        if (user === "rock" && computer === "paper") {
            return false;
        } else if (user === "paper" && computer === "scissor") {
            return false
        } else if (user === "scissor" && computer === "rock") {
            return false
        } else {
            return true
        }
    } else {
        return null;
    }
}
// Function to get the round winner
function getRoundWinner(victory) {
    if (victory === true) {
        userWins++
        return "user"
    } else if (victory === false) {
        computerWins++
        return "computer"
    } else {
       return "draw"
    }
}

// Function to get overall winner based on all rounds
function getWinner() {
    if (userWins > computerWins) {
        return "you"
    } else if (userWins < computerWins) {
        return "user"
    } else {
        return "draw"
    }

}
// Add EventListener on all RemotePlayback, paper, scissor buttons
// and trigger photo change and wins count
document.querySelectorAll(".user-hand-btn").forEach((btn) => {
    btn.addEventListener("focus", (e) => {
        num = Math.floor((Math.random() * 3) + 1);
        user = e.target.getAttribute("id")
        computer = makeAChoice(num)
        victory = win(user, computer)
        roundWinner = getRoundWinner(victory)

        computerChoice.setAttribute("src", `${folderName}/hand_${computer}.png`)
        userChoice.setAttribute("src", `${folderName}/hand_${user}.png`)
        document.getElementById(`computer-${computer}`).focus()
        e.target.blur()
        
        if (roundWinner !== "draw") {
            // winState.innerHTML += `<ul>${i}. ${roundWinner} win the Round</ul>`
            let r = `${roundWinner}Wins`
            console.log(r)
            document.getElementById(r).innerText = `${Number(document.getElementById(r).innerText)+1}`
            
        } else {
            // winState.innerHTML += `<ul>${i}. It's a draw!</ul>`
            ties.innerText = Number(ties.innerText)+1
        }
        if (round === 1) {
            round--
            winner = getWinner()
            if(winner !== "draw"){
               text = `${winner.toUpperCase()} Wins the match!`
            } else {
                text = "It's a Draw!! :3"
            }
            winnerShow.innerText = text
            myModal.show()
            // winState.innerHTML = `<strong> ${winner} wins the match</strong>`
        } else {
            round--
        }
        roundShow.innerText = `${round}`
        i++   
        
    })
})