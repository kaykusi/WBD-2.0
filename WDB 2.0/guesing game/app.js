let maximum = parseInt(prompt("Enter max number!!"));
while(!maximum){
    maximum = parseInt(prompt("Please enter a valid number!!"));
}
const targetNum = Math.floor(Math.random()* maximum)+ 1;
let guess = parseInt(prompt("Please enter a guess"));
while(!guess){
    guess = parseInt(prompt("Please enter a valid number!!"));
}
let attempt =  1;
while(parseInt(guess) !== targetNum){
    if (guess === 'q') {
        console.log("I Quit");
        break;
    }
    attempt++;
    if (guess > targetNum){
        guess = prompt("Too high! Enter a new guess");
    }else{
        guess = prompt("Too low! Enter a new guess");
    }
}
console.log(`You got it. It took you ${attempt} guesses.`);
