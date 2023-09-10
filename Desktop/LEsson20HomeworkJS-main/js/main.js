
let iphone = document.querySelector( ".iphone" );
let theTorch = document.querySelector( ".iphone-torch-wrapper" );
let theLockCamera = document.querySelector( ".iphone-camera-wrapper" );
let theIphoneHome = document.querySelector( ".iphone-home" );
let iphoneLockTop = document.querySelector( ".iphone-top" );
let iphoneLockMiddle = document.querySelector( ".iphone-middle" );
let iphoneLockBottom = document.querySelector( ".iphone-bottom" );
let passwordNumbers = document.querySelectorAll( ".iphone-password-numbers span p" );
let passwordInput = document.querySelector( ".the-password" );
let thePasswordCheck = document.querySelector( ".password-check-button" );
let passwordWrapper = document.querySelector( ".iphone-password-wrapper" );
let theBattery = document.querySelector(".ios-battery img");
let theBatteryShow = document.querySelector(".ios-battery-show");
let theBatteryShowText = document.querySelector(".ios-battery .ios-battery-show p");
let theIphoneMenu = document.querySelector(".iphone-menu")
let theIOSbattery = document.querySelector(".i-b-show")
let iphoneLockClock = document.querySelector(".iphone-lock-clock p")

const theRealPassword = 2023;


theTorch.addEventListener( "click", () => {
  iphone.classList.toggle( "iphone-torch" )
} )

theIphoneHome.addEventListener( "click", () => {
  iphoneLockMiddle.classList.add( "lockscreen-none" );
  iphoneLockBottom.classList.add( "lockscreen-none" );
  theTorch.classList.add( "lockscreen-none" );
  theLockCamera.classList.add( "lockscreen-none" );
  passwordWrapper.style.top = "0%";
} )

passwordNumbers.forEach( number => {
  number.addEventListener( "click", () => {
    if ( passwordInput.value.length < 4 ) {
      passwordInput.value += number.innerHTML;
    }
  } );
} );

thePasswordCheck.addEventListener( "click", () => {
  if ( passwordInput.value == 2023 ) {
    passwordWrapper.style.top = "-500%";
    iphone.style.backgroundImage = "url(../images/onwallpaper.jpg)";
    theIphoneMenu.style.display = "block";
  }
} )

// theBattery.addEventListener("click",() => {

//   theBatteryShow.classList.toggle("lockscreen-block");

// })

let batteryPromise = navigator.getBattery();

batteryPromise.then( ( batteryObject ) => {
  theIOSbattery.innerHTML = `
  <p style="color:green; font-size:12px; font-weight:600;">${Math.trunc( batteryObject.level * 100 )}%</p>
  ` ;
} );  


///lock clock


setInterval( () => {
  let time = new Date()
  let theHour = time.toLocaleTimeString( "it-IT" )
  iphoneLockClock.innerHTML = theHour.slice( 0, 5 );
}, 1000 )
