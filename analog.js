time();
setInterval(time, 1000);
drawClock();
function time() {

    // Executes function every second

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

function drawClock() {

    canvas = document.getElementById("analogClock");
    clock = document.getElementById("clock");
    

    ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    

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
}
