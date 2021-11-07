var x;
var startstop = 0;

function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.querySelector(".start_stop").innerHTML = "Stop";
    document.querySelector(".start_stop").style.backgroundColor = "#EF6262"
  } else if (startstop === 2) {
    document.querySelector(".start_stop").innerHTML = "Start";
    document.querySelector(".start_stop").style.backgroundColor = "#59b87e"
    startstop = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variable End */


function timer() {
  /* Main Timer */


  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }



  document.getElementById("minutes").innerHTML = minOut;
  document.getElementById("hours").innerHTML = hourOut;
document.querySelector('#setHours').innerHTML = hourOut;
}


/* Adds 0 when value is <10 */


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {


  /*Reset*/

  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
  
}

document.querySelector("#setHours").addEventListener("input", ()=>{
  
  newHour = document.querySelector("#setHours").value
  if(newHour.toString().length < 3){
  hour = newHour}
  console.log(newHour)
})
