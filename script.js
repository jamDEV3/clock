let clockDisplay = document.getElementById('display');
let clockMode = document.getElementById('mode');
let clock = document.getElementById('clock');

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let hours = document.getElementById('hours');
let pin = document.getElementById('pin');

let analogClock = document.createElement("canvas");

seconds.style.display = "none";
minutes.style.display = "none";
hours.style.display = "none";
pin.style.display = "none";

setInterval(time, 1);

function time() {

    // Executes function every second

    // Declares time properties
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm = "AM";
    let currentTime;

    if ((clockDisplay.className == 'twelve') || (clockDisplay.className == 'time')) {
    
    // Makes sure 2 digits appear for each time partition
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;

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
        
    }

    let hour_rot = hour * 30 + min / 2;
    console.log(hour_rot);
    let min_rot = min * 6;
    console.log(min_rot);
    let sec_rot = sec * 6;
    console.log(sec_rot);
    document.getElementById("hours").style.transform = `rotate(${hour_rot}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${min_rot}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${sec_rot}deg)`;
}


function twelve() {
    clockDisplay.className = "twelve";
}

function twentyFour() {
    clockDisplay.className = "twentyFour";
}

function analog() {
    clockDisplay.className = "analog";
}

function analog() {
    clockMode.className = "analog";
    analogClock.id = "analogClock";
    analogClock.width = 360;
    analogClock.height = 360;
    
    clock.appendChild(analogClock);

    canvas = document.getElementById("analogClock");

    checkCanvas = document.body.contains(canvas);

    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(180, 180, 150, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 180, 1, 0, 2 * Math.PI);
    ctx.stroke();

    // North
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.moveTo(180, 45);
    ctx.lineTo(180, 75);
    ctx.stroke();

    // North East 1
    ctx.beginPath();
    ctx.moveTo(250, 65);
    ctx.lineTo(242, 80);
    ctx.stroke();

    // North East 2
    ctx.beginPath();
    ctx.moveTo(297, 114);
    ctx.lineTo(282, 121);
    ctx.stroke();

    // East
    ctx.beginPath();
    ctx.moveTo(315, 180);
    ctx.lineTo(285, 180);
    ctx.stroke();

    // South East 1
    ctx.beginPath();
    ctx.moveTo(297, 246);
    ctx.lineTo(282, 239);
    ctx.stroke();

    // South East 2
    ctx.beginPath();
    ctx.moveTo(250, 295);
    ctx.lineTo(242, 280);
    ctx.stroke();

    // South
    ctx.beginPath();
    ctx.moveTo(180, 285);
    ctx.lineTo(180, 315);
    ctx.stroke();

    // South West 1
    ctx.beginPath();
    ctx.moveTo(110, 295);
    ctx.lineTo(118, 280);
    ctx.stroke();

    // South West 2
    ctx.beginPath();
    ctx.moveTo(63, 246);
    ctx.lineTo(78, 239);
    ctx.stroke();
    
    // West
    ctx.beginPath();
    ctx.moveTo(45, 180);
    ctx.lineTo(75, 180);
    ctx.stroke();

    // North West 1
    ctx.beginPath();
    ctx.moveTo(110, 65);
    ctx.lineTo(118, 80);
    ctx.stroke();

    // North West 2
    ctx.beginPath();
    ctx.moveTo(63, 114);
    ctx.lineTo(78, 121);
    ctx.stroke();

    seconds.style.display = "block";
    hours.style.display = "block";
    minutes.style.display = "block";
    pin.style.display = "block";

}

function digital() {
    clockMode.className = "digital";
    canvas.remove();
    seconds.style.display = "none";
    minutes.style.display = "none";
    hours.style.display = "none";
    pin.style.display = "none";
}

time();