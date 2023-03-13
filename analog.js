time();
function time() {

    // Executes function every second
    setInterval(time, 1000);

    // Declares time properties
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
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
