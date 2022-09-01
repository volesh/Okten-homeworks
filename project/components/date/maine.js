const timeContainer = document.querySelector('.maine_container_time');
const dateContaine = document.querySelector('.maine_container_date')
const greatingContainer = document.querySelector('.maine_container_greating_text')
const name = document.getElementById('name');

let timesOfDay = ['night', 'morning', 'day', 'evening'];



// Time function
function showTime() {

    time = new Date().toLocaleTimeString()
    timeContainer.innerHTML = `${time}`

    showDate()

    greetUser()

    greetUser()

    setTimeout(showTime, 1000)
}


// Date function
function showDate() {
    const options = {day: 'numeric',weekday: 'long', month: 'long'};
    let date = new Date().toLocaleDateString('en-US', options)
    dateContaine.innerHTML = `${date}`
}


// greating function
function greetUser() {
    let partOfDay = Math.floor(new Date().getHours() / 6)
    let uns = timesOfDay[partOfDay]
    greatingContainer.innerHTML = `Good ${uns}`
}

// name funtions

function setLocalStorage() {
    localStorage.setItem('name', name.value)
}

function getLocalStorage() {
    name.value = localStorage.getItem('name')
}


window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

showTime();
