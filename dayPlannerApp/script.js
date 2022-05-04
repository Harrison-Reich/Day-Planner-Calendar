// set current date on page
const setDate = () => {
  document.getElementById(`currentDate`).innerHTML =
    moment().format("MMMM Do YYYY");
};

// setting color to text area based off the index in relation to the current time (is the event in the future, present or past)
const setHilghlightClasses = () => {
  const date = new Date();
  hour = date.getHours();
  for (let i = 9; i < 18; i++) {
    if (hour === i) {
      document.getElementById(i).classList.add("present");
    } else if (hour > i) {
      document.getElementById(i).classList.add("past");
    } else {
      document.getElementById(i).classList.add("future");
    }
  }
};

// saving user inputs to local storage from save button onclick
const saveTodo = (slotHour) => {
  let savedItems = JSON.parse(localStorage.getItem("datePlanner"));
  const todoText = document.getElementById(`textarea_${slotHour}`).value;
  if (savedItems) {
    // if savedItems does exist run the next lines of code
    savedItems[slotHour - 9] = todoText;
    localStorage.setItem("datePlanner", JSON.stringify(savedItems));
  } else {
    // if savedItems does NOT exist run the next lines of code
    savedItems = ["", "", "", "", "", "", "", "", ""];
    savedItems[slotHour - 9] = todoText;
    localStorage.setItem("datePlanner", JSON.stringify(savedItems));
  }
};

// populate saved todo items (inputs) from local storage to frontend (user inputs stay until deleted)
const populateFromLocalStorage = () => {
  const savedItems = JSON.parse(localStorage.getItem("datePlanner"));
  if (savedItems) {
    for (let i = 9; i < 18; i++) {
      document.getElementById(`textarea_${i}`).value = savedItems[i - 9];
    }
  }
};

setDate();
setHilghlightClasses();
populateFromLocalStorage();
