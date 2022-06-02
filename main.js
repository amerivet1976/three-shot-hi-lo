const prompt = require('prompt-sync')({sigint: true});

let ranDom = Math.ceil(100*(Math.random()));

console.log(ranDom);

let guess = Number(prompt("Guess a number: "))


let chance = 1;

    while(chance < 3 && guess !== ranDom){


        if(guess < ranDom){
            console.log("Too low")
        }else if (guess > ranDom){
            console.log("Too high")
        }
        chance++;

    guess = Number(prompt("Guess again! "))

    }

        if (guess = ranDom){
            console.log("Exactly!")
        } else{
            console.log("Better luck next time!")
        }


        
        


console.log ("we're done")

