let clockDisplay = document.getElementById('display');
let clockMode = document.getElementById('mode');

function time() {

    // Executes function every second
    setInterval(time, 1);

    // Declares time properties
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm = "AM";
    let currentTime;

    //Default time display on startup
    if (clockDisplay.className == 'twelve') {
    
    // Makes sure 2 digits appear for each time partition
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;

    //Quick fix: Condition for 12 Noon so it displays PM - not 100% sure if it will interfere with 12 Midnight
    if (hour == 12) {
        am_pm= "PM";
    }

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    currentTime = hour + ":" + min + ":" + sec + am_pm;
    clockDisplay.innerHTML = currentTime;
    }

    else if (clockDisplay.className == 'twentyFour'){

    // Makes sure 2 digits appear for each time partition
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;
    
    currentTime = hour + ":" + min + ":" + sec;
    clockDisplay.innerHTML = currentTime;
    }

    else if (clockDisplay.className == 'analog') {
        analog();
    }
}


function twelve() {
    clockDisplay.className = "twelve";
}

function twentyFour() {
    clockDisplay.className = "twentyFour";
}

function analog() {
    clockMode.className = "analog";

    analogClock = document.createElement("canvas");
    analogClock.id = "analogClock";
    analogClock.width = 200;
    analogClock.height = 200;
    document.body.appendChild(analogClock);

    canvas = document.getElementById("analogClock");

    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, 2 * Math.PI);
    ctx.stroke();

}

function digital() {
    clockMode.className = "digital";
    canvas.remove();
}

time();