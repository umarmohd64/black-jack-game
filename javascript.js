let firstCard
let secondCard
let cards=[]
let sumofcards=0
let cardsEl=document.getElementById("cards-el")
let displayMess=document.getElementById("message")
let sumEl=document.getElementById("sum")
let isAlive=true
let hasBlackjack=false

function startGame() {
    isAlive=true
    firstCard=randomcard()
    secondCard=randomcard()
    cards=[firstCard, secondCard]
    renderGame()
}

function renderGame(){
    sumofcards=0
    cardsEl.textContent="Cards drawn: "
        for(let i=0; i<cards.length; i++){
            cardsEl.textContent+= cards[i]+" "
            sumofcards+=cards[i]
        }
    sumEl.textContent= "Sum: "+sumofcards
    if(sumofcards==21){
        displayMess.textContent="CONGRATULATIONS! You have got a Blackjack"
        hasBlackjack=true
    }
    if(sumofcards>21){
        displayMess.textContent="You are OUT OF THE GAME."
        isAlive=false
    }
    if(sumofcards<21){
        displayMess.textContent="Do you want to draw a new card ?"
    }
}

function randomcard(){
    let carddrawn=Math.floor(Math.random()*13)+1
    if(carddrawn>10)
    return 10
    if(carddrawn===1)
    return 11
    else 
    return carddrawn

}


    
    function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let newDraw= randomcard()
        cards.push(newDraw)
        renderGame()
     }

}

    


