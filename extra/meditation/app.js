const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");

// Were gonna update this value through the js file 
let breathsLeft = 3;

// Watching for selected breaths from user
// everytime the user chooses an option from breath-input, this function is fired 
numberOfBreaths.addEventListener("change", () => {
  //fetching the value selected by the user 
  breathsLeft = numberOfBreaths.value;
  //setting the value selected by user in breath-text
  breathsText.innerText = breathsLeft;
});

// Creatting a function Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  //breath in 4sec, hold 4sec, release 4sec
  //remove the class after 4sec (breath in) +4sec (hold)=8sec
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// Breathing Instructions
// each time this function is run, decrease the breath by 1 
const breathTextUpdate = () => {
  breathsLeft--;
  //update the value of the breathsLeft after deecrementing
  breathsText.innerText = breathsLeft;

  //4-4-4 method 
  instructions.innerText = "Breath in";
  // nested setTimeout 
  setTimeout(() => {
    // after 4secs hold breath
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      // after 4 more seconds
      instructions.innerText = "Exhale Breath Slowly";
    }, 4000);
  }, 4000);
};

// Were creating this function because we want these 2 functions here to execute as many times as the breathsLeft value chosen by the user 
// Breathing App Function
const breathingApp = () => {
  //run this every 12secs (4+4+4)
  const breathingAnimtaion = setInterval(() => {
    //when breathLeft is 0 then clear the interval and pass this text inside instructions.innerText
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
      //when the last breath is over
      start.classList.remove("button-inactive");
      //now the user can initiate another session again if they wish 
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    //if its not equal to 0, invoke these 2 functions 
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// When user clicks on start, Start Breathing, AKA invoke growCircle()
start.addEventListener("click", () => {
  //as soon as the user clicks on start button 
  //button will become inctive and you wont be able to click on it 
  start.classList.add("button-inactive");
  //instructions will be shown up 
  instructions.innerText = "Get relaxed, and ready to begin breathing";
  //were calling a settimeout nested function, were calling at 2s interval
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      //were invoking these 2 functions manually here, bcs the first time user clicks on start, these functions will be invoked from here for the first iteration of breathsLeft, the iterations after that will be taken care of the breathing app (which anyway invokes these 2 functions)
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});