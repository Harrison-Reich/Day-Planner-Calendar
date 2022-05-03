// objectives
// get the number of days in a month
// new Date() is a javascript constructor function

let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();


function getNumberOfDays (year, month) {
    let numberOfDays = new Date(year, month + 1, 0).getDate();
    return numberOfDays;
}

function renderCalendar() {
    let yearPTag = document.getElementById('year');
    yearPTag.innerText = yearChosen;
    let monthPTag = document.getElementById('month');
}