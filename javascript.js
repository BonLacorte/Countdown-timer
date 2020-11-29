const daysEl = document.getElementById("days") 
const hoursEl = document.getElementById("hours") 
const minsEl = document.getElementById("mins") 
const secondsEl = document.getElementById("seconds") 

const christmasDay = "25 Dec 2020"

function countdown() {
    const christmasDate = new Date(christmasDay);
    const currentDate = new Date();

    const totalseconds = (christmasDate - currentDate) / 1000;
    
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 % 24);
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// Initial Call
countdown();

setInterval(countdown, 1000);