let span = document.getElementById('span');

// Executes function every second
setInterval(time, 1000);

function time() {

    // Declares time properties
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Makes sure 2 digits appear for each time partition
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;

    // Arranges time into appropriate digital clock format
    let currentTime = hour + ":" + min + ":" + sec;

    // Translates JS to HTML element
    span.innerHTML = currentTime;
}

time();