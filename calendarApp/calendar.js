// objectives
// get the number of days in a month
// new Date() is a javascript constructor function

// defining months array
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

// defining selected year and month variabels
let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();

// function to get number of days based on current year and month
function getNumberOfDays (year, month) {
    let numberOfDays = new Date(year, month + 1, 0).getDate();
    return numberOfDays;
}

// function to render calendar based on previous function (getNumberOfDays) & generate days as p tag elements based on the selected month's length
function renderCalendar(getNumberOfDays, newYear, newMonth) {
    let yearPTag = document.getElementById('year');
    yearPTag.innerText = newYear;
    let monthName = months[newMonth];
    let monthPTag = document.getElementById('month');
    monthPTag.innerText = monthName
    let dayColumns = document.getElementsByClassName('dayColumn');
    for (let d = 0; d < dayColumns.length; d++) {
        dayColumns[d].innerHTML = ""; 
    }
// for loop starting at 1 (beginning of each month), ending based on getNumberOfDays selected month length
// creating p tags and appending days
    for (let i = 1; i <= getNumberOfDays; i++) {
        let dayPTag = document.createElement('p');
        let dayText = document.createTextNode(i.toString());
        dayPTag.appendChild(dayText);
        let date = monthName + " " + i.toString() + ", " + newYear
        let dayOfWeek = new Date(date).getDay(); 
        // console.log(dayOfWeek);
        document.getElementById(dayOfWeek.toString()).appendChild(dayPTag)
    }
}

function changeMonth(addMinus) {
    if (addMinus === 'subtract') {
            if (monthChosen !== 0){
                monthChosen -= 1;
                renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen); 
            } else {
                monthChosen = 11;
                renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
            }
        } else {
            if (monthChosen !== 11) {
                monthChosen += 1;
                renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
            }
            else {
                monthChosen = 0;
                renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
            }
        }
    }

function changeYear(addMinus) {
    if (addMinus === 'subtract') {
        yearChosen -= 1;
        renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    } else {
        yearChosen += 1;
        renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    }
}

renderCalendar(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);