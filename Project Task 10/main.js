const getUserChoice= (userInput) => {
    userInput=userInput.toLowerCase();
    if(userInput=='rock' || userInput=='paper' || userInput=='scissors' || userInput=='bomb')
    {
        return userInput;
    }
    else
    {
        console.log('Invalid input');
    }
}

const getComputerChoice= () => {
    let x=Math.floor(Math.random() * 3);
    if(x==0) return 'rock';
    else if(x==1) return 'paper';
    else return 'scissors';
}

function determinWinner(userChoice,computerChoice)
{
    if(userChoice=='bomb') return "User won";
    if(userChoice==computerChoice)
        return "Game is a tie";
    if(userChoice=='rock')
    {
        if(computerChoice=='paper') return "Computer won";
        else return "User won";
    }
    if(userChoice=='paper')
    {
        if(computerChoice=='scissors') return "Computer won";
        else return "User won";
    }
    if(userChoice=='scissors')
    {
        if(computerChoice=='rock') return "Computer won";
        else return "User won";
    }
}

function playGame()
{
    let userChoice=getUserChoice('paper');
    console.log(`User's Choice: ${userChoice}`);
    let computerChoice=getComputerChoice();
    console.log(`Computer's Choice: ${computerChoice}`);
    
    console.log(`Winner: ${determinWinner(userChoice,computerChoice)}`);
}

playGame();