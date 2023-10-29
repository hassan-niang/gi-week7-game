
// function rounds(playerChoice, compChoiceFinal){
    //     if (playerChoice === compchoice){
        //        return message(`Tie Round!`);
        //     } else if (playerChoice == rock && compChoiceFinal == scissors){
            //         return messages[1];
            //     } else if (playerChoice == scissors && compChoiceFinal == paper){
                //         return messages[1];
                //     }else if (playerChoice == paper && compChoiceFinal == rock){
                    //         return messages[1];
                    //     } else {
                        //         return messages[0];
                        //     }
                        
                        // }
                 
                        
                        let choices = [`rock`, `paper`,`scissors`]
                        
                        // game = (playerChoice,compChoice) => {                                        
                            //     let messages = [`White Walkers have advanced onto the wall!`, `You've pushed the White Walkers Back!`, `The Night King has taken over Westrios! Run for your life !`, `Westrios is saved! You have defeated the White Walkers!`, `You've Tied No One Has Advanced`];
                            //     if (playerChoice === compChoice){
                                //                return messages[4];
                                //             } else if (playerChoice == 'rock' && compChoice == 'scissors'){
                                    //                 return messages[1];
                                    //             } else if (playerChoice == 'scissors' && compChoice == 'paper'){
                                        //                 return messages[1];
    //             } else if (playerChoice == 'paper' && compChoice == 'rock'){
        //                 return messages[1];
        //             } else {
            //                 return messages[0];
            //             }    
            
            //         }     
const playerbtn = document.querySelectorAll('[data-selection]')                      
const finalColumn = document.querySelector(`[data-final-column]`)

const playerChoice = [
    {
        name: `rock`, 
        emoji: "👊🏿",
        beats: `scissors`
    },
    {
        name: `scissors`, 
        emoji: "✌🏿",
        beats: `paper`
    },
    {
        name: `paper`, 
        emoji: "✋🏿",
        beats: `rock`
    }
]
             
playerbtn.forEach(playerbtn =>{
 playerbtn.addEventListener('click', e=> {
    const selectionName = playerbtn.dataset.selection 
    const selection = playerChoice.find(selection => selection.name === selectionName) 
    makeSelection(selection)
    })
})
function makeSelection(selection) { 
     const compSelction = computerChoice()
     const yourWinner = isWinner(selection, compSelction) 
     const compWinner = isWinner (compSelction,selection)
    
    addSelectionResults(compSelction,compWinner)
    addSelectionResults(selection,yourWinner)

    }
function addSelectionResults (selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add(`winner`)
    finalColumn.after(div)
}
function isWinner(selection, oppSelection) { 
    return selection.beats === oppSelection.name
}  


function computerChoice(){
    const compChoice = Math.floor(Math.random() * playerChoice.length)
    return playerChoice[compChoice] 
}
