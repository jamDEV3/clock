let clockDisplay = document.getElementById('display');

function time() {

    // Executes function every second
    setInterval(time, 1);

    // Declares time properties
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm;
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
        hr = 12;
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
}


function twelve() {
    clockDisplay.className = "twelve";
}

function twentyFour() {
    clockDisplay.className = "twentyFour";
}

time();