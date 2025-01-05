

let cards = []

let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("round-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Josh",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
   
    if (randomCard === 1) {
        return 11
    }else if (randomCard > 10) {
        return 10
    }else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = []

let secondCard = []

let cards = [firstCard, secondCard]

 let sum = firstCard + secondCard
    return renderGame()
}


function renderGame() {
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ~ "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! You lost your money."
        isAlive = false
    }
    messageEl.textContent = message
    
    
    console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    sum += newCard
    renderGame()
    cards.push(newCard)
    }
}