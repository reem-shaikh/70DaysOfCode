console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

//initially gameover set to false 
let isgameover = false;

// Function to change the turn
//when its X turn, next turn will be of 0; otherwise it will be X turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        //this is combinations of how the user can win 
        //0 1 2
        //3 4 5
        //6 7 8
        //0 3 6
        //1 4 7
        //2 5 8
        //0 4 8
        //2 4 6
                  //these last 3 columns are for the line through dimensions
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(e =>
        //e0, e1 and e3 signify the first 3 columns of the game 
        //e3, e4, e5 signifies the vw, vw and the angle in the the rotation of the line will be set 

    {   //e0   e1   e2   e3   e4    e5
        //0    1    2    5    5     0deg  (horizontal line)
        //3    4    5    5    15    0deg
        //6    7    8    5    25    0deg 
        //0    3    6   -5    15    90deg  (vertical line)
        //1    4    7    5    15    90deg 
        //2    5    8   15    15    90deg
        //0    4    8    5    15    45deg  (diagonal line)
        //2    4    6    5    15    135deg
        
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) 
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true

            //once the user wins, the .gif image is loaded to a wdith of 200px, note that: in the css file the width we set it to was 0
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            //adding a line over the winning sequence in this angle
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

            //change width of line to 20vw on winning 
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
console.log('box', boxes)
/*
HTMLCollection(9) [div.box.bt-0.bl-0, div.box.bt-0, div.box.bt-0.br-0, div.box.bl-0, div.box, div.box.br-0, div.box.bl-0.bb-0, div.box.bb-0, div.box.bb-0.br-0]
0: div.box.bt-0.bl-0
1: div.box.bt-0
2: div.box.bt-0.br-0
3: div.box.bl-0
4: div.box
5: div.box.br-0
6: div.box.bl-0.bb-0
7: div.box.bb-0
8: div.box.bb-0.br-0
length: 9
[[Prototype]]: HTMLCollection
*/
Array.from(boxes).forEach(element =>
{
    //console.log('element', element)
    //element targets each individual box also displaying its contents 

    //technically, .box is the container of boxtext
    let boxtext = element.querySelector('.boxtext');

    //eveyr time we click on .boxtext 
    element.addEventListener('click', ()=>
    {
        //while its content is empty 
        if(boxtext.innerText === '')
        {
            //invoke turn 
            boxtext.innerText = turn;
            //keep changing turns
            turn = changeTurn();
            //play the audio file after every turn 
            audioTurn.play();
            checkWin();

            //till gameover is false it keeps changing turns 
            if (!isgameover)
            {
                //change the innerText of 'turn for X' button to the next turn
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');

    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });

    //turn set to X again
    turn = "X"; 
    //game is at its initial value false again 
    isgameover = false

    //removing line cut animation 
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;

    //when we reset the image will dissapear
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

