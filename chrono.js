
var startstop = 0;
var x;
function startStop() {
  /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.querySelector(".start_stop").innerHTML = "Stop";
    document.querySelector(".start_stop").style.backgroundColor = "#EF6262";
    document.querySelector(".start_stop").style.borderRadius = "5px";
  } else if (startstop === 2) {
    document.querySelector(".start_stop").innerHTML = "Start";
    document.querySelector(".start_stop").style.backgroundColor = "#59b87e";
    document.querySelector(".start_stop").style.borderRadius = "0px";
    startstop = 0;
    stop();
  }
}

function start() {
  let milisec = JSON.parse(localStorage.getItem("time"));
  startedAt = Date.now() - milisec;
  x = setInterval(timer, 100);
} /* Start */

function stop() {
  clearInterval(x);
  localStorage.setItem("time", JSON.stringify(milisec));
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

  milisec = Date.now() - startedAt;
  second = Math.floor(milisec / 1000);
  hour = Math.floor(second / 3600);
  min = Math.floor((second - hour * 3600) / 60);
  sec = second - hour * 3600 - min * 60;
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);
  document.getElementById("minutes").innerHTML = minOut;
  document.getElementById("hours").innerHTML = hourOut;
  document.getElementById("secondes").innerHTML = secOut;
  document.querySelector("#setHours").innerHTML = hourOut;
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
  localStorage.clear();

  milisec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("secondes").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
}

document.querySelector("#setHours").addEventListener("change", () => {
  newHour = document.querySelector("#setHours").value;
  hour = startedAt - newHour * 3600000;
  if (hour > Date.now()) {
    document.querySelector("#setHours").value = "";
    return;
  }
  startedAt = hour;
  document.querySelector("#setHours").value = "";
});
document.querySelector("#setMinutes").addEventListener("change", () => {
  newMinutes = document.querySelector("#setMinutes").value;
  minute = startedAt - newMinutes * 60000;

  if (minute > Date.now()) {
    document.querySelector("#setMinutes").value = "";
    return;
  }
  startedAt = minute;
  document.querySelector("#setMinutes").value = "";
});
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    startStop();
  }
};
window.onbeforeunload = function () {
  localStorage.setItem("time", JSON.stringify(milisec));
};
