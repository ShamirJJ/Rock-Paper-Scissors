//javascript code placeholder
console.log("Hello World");

function getComputerChoice () {
    let computerResult = Math.floor(Math.random() * 100) + 1;
    if (computerResult <=33) {
        console.log("Rock");
        
    } else if (computerResult > 33 && computerResult < 66) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice(Math.floor(Math.random()*100) +1);

console.log(getComputerChoice);