const daysel = document.getElementById('days');
const hourel = document.getElementById('hours');
const minuteel = document.getElementById('min');
const secondel = document.getElementById('sec');
const newYear = "1 jan 2022";

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecond = (newYearDate-currentDate)/1000;

    const day = Math.floor(totalSecond/3600/24);
    const hour = Math.floor(totalSecond/3600)%24;
    const minute = Math.floor(totalSecond/60)%60;
    const second = Math.floor(totalSecond%60);
    
    daysel.innerHTML=day;
    hourel.innerHTML=formattime(hour);
    minuteel.innerHTML=formattime(minute);
    secondel.innerHTML=formattime(second);
}
function formattime(time){
    return (time < 10 ? `0${time}` : time);
}
countdown();
setInterval(countdown, 1000);