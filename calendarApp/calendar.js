// objectives
// get the number of days in a month
// new Date() is a javascript constructor function

let months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

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