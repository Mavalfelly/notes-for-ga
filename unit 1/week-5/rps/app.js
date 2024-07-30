//click ont he button and display on the prompt what i clicked//
//step 1 add event listners
//when button is clicked update prompt to class



//Consts
const handleClick = (e) => {
    // console.log('clicked', e.target.className)
    //grap the p tag and replace the text with the class name
    
    // choose a random play.
    const choices = ['rock','paper','scissors']
    //random number between 0-2
    //math.random returns a decimal number between 0 and 1
    //math.floor rounds down to the nearest interger
    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]
    const text = `You choose ${e.target.className} and computer chooses ${computerChoice}. `

    if (e.target.className === computerChoice) {
        msg = 'You tied!';
    } else if (e.target.className === choices[0] && computerChoice === choices[2]) {
        msg = 'Congrats! You win!';
    } else if (e.target.className === choices[1] && computerChoice === choices[0]) {
        msg = 'Congrats! You win!';
    } else if (e.target.className === choices[2] && computerChoice === choices[1]) {
        msg = 'Congrats! You win!';
    } else {
        msg = 'You lose! Try again?';
    }
    document.querySelector('p').textContent = text + msg
}





//vars



//event listners
document.querySelector('.rock').addEventListener('click', handleClick)
document.querySelector('.scissors').addEventListener('click',handleClick)
document.querySelector('.paper').addEventListener('click',handleClick)

