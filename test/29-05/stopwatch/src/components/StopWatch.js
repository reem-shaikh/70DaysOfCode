import React from "react";
import '../App.css'
//we'll use useState and useEffect hook in our stop watch 
import { useState, useEffect } from "react";
const StopWatch= () => {
    //creating a time variable which will keep track of number of ms our timer has been on and setTime is used to set this time
    const [time, setTime] = useState(0);

    //create another state to check if the timer is on or not 
    const [timerOn, setTimerOn] = useState(false);

    //everytime timerOn state is changed useEffect will be run 
    useEffect(() => {
      let interval = null;
  
      //if timer is on - every 10ms increase the time to 10 ms
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } 
      //else if timer is off - clear the interval which was set above 
      else if (!timerOn) {
        clearInterval(interval);
      }
  
      //cleanup function - to prevent memory leaks when component is unmounted 
      return () => clearInterval(interval);
    }, [timerOn]);



    // 1min   = 60secs
    // 1sec   = 1/60min
    // 1000ms = 1sec
    // 1ms    = 1/1000sec = 0.001sec
    // 1min   = 60secs x 1000ms = 60,000ms 
    // 1hr    = 60mins 
    // 1hr    = 60mins x 60secs = 3600secs
    // 1hr    = 60mins x 60secs x 1000ms = 3600 x 1000ms = 3,600,000ms
  
    return (
      <div classNameName="container">
        
        {/* keep track of minutes, seconds and milliseconds  */}

    <div className='watch'>
    <div className="outer-circle">
        <div className='inner-circle'>
        {/* 1. For min 
          - 1min = 60000ms 
          - 1min = 60sec
            min = time / 60000 % 60   */}
          <span className='text'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>


          {/* 2. For sec 
            - 1sec = 1000ms 
            - 1min = 60secs 
              sec = time / 1000 % 60  */}
          <span className='text'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>


          {/* 3. For ms 
            - 1ms = 1/1000sec 
            - 10ms = 1/100sec
              ms = time / 10 % 100
            were trying to retreive the 100th of the second, everytime the second counter reaches 100 it resets back to 0. 
            we could keep the ms till a 1000 as well (ms = time / 1 % 1000), but since our timer incorporates only 2 digits for uniformity, were 
            taking 10ms instead    */}
          <span className='text'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    </div>
    </div>

        <div className='button-wrapper'>
          {(
            <button  onClick={() => setTimerOn(true)}> ▶️ </button>
          )}

          {<button  onClick={() => setTimerOn(false)}> ⏹️ </button>}

          {( 
            <button  onClick={() => setTime(0)}> 🎬 </button>
          )}

          {(
            <button  onClick={() => setTimerOn(true)}> ⏭</button>
          )}
        </div>
   
      </div>
    );
  };

  export default StopWatch;