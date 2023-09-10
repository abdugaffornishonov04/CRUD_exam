let theClock = document.querySelector(".apps-clock img");
let theClockWrapper = document.querySelector(".apps-clock-main-wrapper");
let theClockLeave = document.querySelector( ".apps-clock-wrapper-leave");
let theClockP = document.querySelector( ".apps-clock-wrapper p");


// let date = new Date();

// let theTime = date.toLocaleTimeString( "it-IT" );

// theClockP.innerHTML

setInterval( () => {
  let date = new Date();
  let theTime = date.toLocaleTimeString( "it-IT" );
  theClockP.innerHTML = theTime;
}, 1000 );

theClock.addEventListener("click", () => {
  theClockWrapper.style.display = "block";
})
theClockLeave.addEventListener("click", () => {
  theClockWrapper.style.display = "none";
})



