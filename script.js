const playerbtn = document.querySelectorAll('[data-selection]')                      
const finalColumn = document.querySelector(`[data-final-column]`)
const compScoreSpan = document.querySelector(`[data-computer-score]`)
const yourScoreSpan = document.querySelector(`[data-your-score]`)

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
    
    if (yourWinner) incrementScore (yourScoreSpan)
    if (compWinner) incrementScore (compScoreSpan)
    } 
function incrementScore (scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
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
