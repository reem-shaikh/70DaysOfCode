// import readline 
const readline = require('readline')

// create instance of readline interface 
const rl = readline.createInterface({input : process.stdin, 
                          output: process.stdout})
// process - global object 

// return random number between 1 and 10 
let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 + num2 

rl.question(`what is ${num1} + ${num2}? \n`, (userInput)=> {
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        // set the prompt
        rl.setPrompt('incorrect response \n')
        // call the prompt 
        rl.prompt()
        // adding listener 
        rl.on('line', (userInput) => {
            // check if users input is correct 
            if(userInput.trim() == answer){
                rl.close()
            } else {
                // its going to execute in a loop until the user gets the answer right 
                rl.setPrompt(`your answer of ${userInput} is incorrect, try again \n`)
                rl.prompt()
            }
        })
    }
})

// this executed when readline is closed 
// print this message when user enters the right value 
rl.on('close', () => {
    console.log('correct')
})