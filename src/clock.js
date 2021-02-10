const clockContainer = document.querySelector('.js-state-bar__clock');
const clockTitle = clockContainer.querySelector('.js-state-bar__clockTitle');

let interval;

function getTimeTwentyFour(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.textContent = `${hours < 10 ? "0"+hours : hours}:${minutes < 10 ? "0"+minutes : minutes}`;
}
function init(){
    getTimeTwentyFour();
    interval = setInterval(getTimeTwentyFour, 1000);
    interval;
}
init();
