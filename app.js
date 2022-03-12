
const game = () => {
    let pScore = 0
    let cScore = 0

        


    const startGame = () => {
        const playBtn = document.querySelector(".play-btn")
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector(".match")


        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })

        
    }

    const playMatch = () =>  {
        const options = document.querySelectorAll('.options a')
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = ""
            })
        })

        const computerOptions = ["Rock","Paper","Scissors"]

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]


                setTimeout(() => {

                   compareHands(this.textContent, computerChoice)
                   playerHand.src = `assets/${this.textContent}.png`
                   computerHand.src = `assets/${computerChoice}.png`

                }, 2000)
                

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"





                



                
            })
        })
    }

    
    const updateScore = (winner) => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        
        
        
        

        playerScore.textContent =  pScore
        computerScore.textContent = cScore

        

        if(playerScore.textContent === '5'){
            
            winner.textContent = "You won this round !"
        }
        
        else if(computerScore.textContent === "5"){
            
            winner.textContent = "Computer won this round !"
        }


        

        
        



        


        
    }

    

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner")
        

        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie !"
        
            return
            
        }

        if(playerChoice === 'Rock'){
            if(computerChoice === 'Scissors'){
                winner.textContent = "Player wins !"
                pScore ++
                updateScore(winner)
                return
                
                
            }

            else {
                winner.textContent = "Computer wins !"
                cScore ++
                updateScore(winner)
                return
                
                
                
            }
        }

        if(playerChoice === 'Paper'){
            if(computerChoice === 'Rock'){
                winner.textContent = "Player wins !"
                pScore ++
                updateScore(winner)
                return
                
                
            }

            else {
                winner.textContent = "Computer wins !"
                cScore ++
                updateScore(winner)
                return
                
                
            }

        }

        if(playerChoice === "Scissors"){
            if(computerChoice === 'Rock'){
                winner.textContent = "Computer wins !"
                cScore ++        
                updateScore(winner)        
                return
                
                
            }

            else {
                winner.textContent = "Player wins !"
                pScore ++        
                updateScore(winner)       
                return
                
                
            }
        }

        

    }

    startGame()
    playMatch()
}

game()
