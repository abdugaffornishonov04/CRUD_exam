let theAlarmApp = document.querySelector(".apps-alarm img");
let alarmSetter = document.querySelector(".alarm-set");
let alarmPause = document.querySelector(".alarm-pause");
let theAlarmInput = document.querySelector( ".apps-alarm-wrapper input" );
let theMainWrapper = document.querySelector(".apps-alarm-main-wrapper");
let alarmLEave = document.querySelector(".alarm-leave");
let alarmAudio = document.querySelector(".alarm-audio");

theAlarmApp.addEventListener("click", () => {
  theMainWrapper.style.display = "block";
})

alarmLEave.addEventListener("click", () => {
  theMainWrapper.style.display = "none";
})

alarmSetter.addEventListener("click", () => {
  setInterval( () => {
    let date = new Date();
    let time = date.toLocaleTimeString( "it-IT" );
     let theHour = time.slice( 0, 5 );
    console.log( theHour );
    if ( theHour === theAlarmInput.value ) {
      alarmAudio.play();
    }
  }, 1000 );

  alarmPause.addEventListener( "click", () => {
    alarmAudio.pause();
  } );
})



// alarmSetter.addEventListener( "click", () => {
//   const alarmTime = new Date();
//   const [ hours, minutes ] = theAlarmInput.value.split( ":" );
//   alarmTime.setHours( hours );
//   alarmTime.setMinutes( minutes );

//   const currentTime = new Date();

//  console.log(currentTime);
// } );



