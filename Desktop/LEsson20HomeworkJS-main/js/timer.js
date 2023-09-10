let theTimer = document.querySelector( ".apps-timer" );
let theTimerDisplay = document.querySelector( ".apps-timer-display" );
let theTimerDisplayWrapper = document.querySelector( ".apps-timer-display-wrapper-main" );
let theTimerDisplayWrapperID = document.querySelector( "#a-t-d-w" );

let theTimerInputs1 = document.querySelector( ".apps-timer-display-hours" );
let theTimerInputs2 = document.querySelector( ".apps-timer-display-min" );
let theTimerInputs3 = document.querySelector( ".apps-timer-display-sec" );

let theTimerContent = document.querySelector( ".themaintimerel p" );

let btnSet = document.querySelector( ".apps-timer-display-set" );
let btnStart = document.querySelector( ".apps-timer-display-start" );
let btnPause = document.querySelector( ".apps-timer-display-pause" );
let btnLeave = document.querySelector( ".apps-timer-display-leave" );

theTimer.addEventListener( "click", () => {
  theTimerDisplayWrapper.style.display = "block";
} )

btnLeave.addEventListener( "click", () => {
  theTimerDisplayWrapper.classList.add("displayy-none")
} )

btnSet.addEventListener( "click", () => {
  theTimerContent.innerHTML = `${theTimerInputs1.value}:${theTimerInputs2.value}:${theTimerInputs3.value}`
} )

let countdownInterval;

btnSet.addEventListener( "click", () => {
  theTimerContent.innerHTML = `${theTimerInputs1.value}:${theTimerInputs2.value}:${theTimerInputs3.value}`
} )

btnStart.addEventListener( "click", () => {
  let countdownValue = theTimerContent.innerHTML;
  startCountdown( countdownValue );
} )

btnPause.addEventListener( "click", () => {
  clearInterval( countdownInterval );
} )

function startCountdown( countdownValue ) {
  let timeArray = countdownValue.split( ":" );
  let hours = parseInt( timeArray[ 0 ] );
  let minutes = parseInt( timeArray[ 1 ] );
  let seconds = parseInt( timeArray[ 2 ] );

  countdownInterval = setInterval( () => {
    if ( seconds > 0 ) {
      seconds--;
    } else {
      if ( minutes > 0 ) {
        minutes--;
        seconds = 59;
      } else {
        if ( hours > 0 ) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval( countdownInterval );
        }
      }
    }

    let newCountdownValue = `${hours.toString().padStart( 2, "0" )}:${minutes.toString().padStart( 2, "0" )}:${seconds.toString().padStart( 2, "0" )}`;
    theTimerContent.innerHTML = newCountdownValue;
  }, 1000 );
}


function appsTimerDisplayNone() {
  theTimerDisplayWrapperID.style.display = "none";
}










