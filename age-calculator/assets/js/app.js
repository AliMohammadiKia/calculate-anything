//selecting the main element of the page
const main = document.querySelector("main");
//form should be here => before result section!!!!!!

// form start
const formElement = document.createElement("form");
main.prepend(formElement);

const inputContainerElement = document.createElement("div");
inputContainerElement.classList = "flex gap-4 w-full mb-6";
formElement.append(inputContainerElement);

// Day input
const dayLabel = document.createElement("label");
dayLabel.setAttribute("for", "day");
dayLabel.classList = "w-full";
inputContainerElement.append(dayLabel);

const dayLabelText = document.createElement("div");
dayLabelText.classList =
  "block text-sm font-semibold text-gray-500 uppercase mb-2 tracking-widest";
dayLabelText.innerText = "Day";
dayLabel.append(dayLabelText);

const dayInput = document.createElement("input");
dayInput.type = "text";
dayInput.id = "day";
dayInput.name = "day";
dayInput.placeholder = "DD";
dayInput.classList =
  "day-input w-full p-2 border border-gray-300 placeholder-gray-500 rounded-lg text-xl font-bold focus:outline-none focus:border-purple-600";
dayLabel.append(dayInput);

const dayError = document.createElement("div");
dayError.classList = "Error-day text-red-500 text-xs italic mt-2";
dayLabel.append(dayError);

// Month input
const monthLabel = document.createElement("label");
monthLabel.setAttribute("for", "month");
monthLabel.classList = "w-full";
inputContainerElement.append(monthLabel);

const monthLabelText = document.createElement("div");
monthLabelText.classList =
  "block text-sm font-semibold text-gray-500 uppercase mb-2 tracking-widest";
monthLabelText.innerText = "Month";
monthLabel.append(monthLabelText);

const monthInput = document.createElement("input");
monthInput.type = "text";
monthInput.id = "month";
monthInput.name = "month";
monthInput.placeholder = "MM";
monthInput.classList =
  "month-input w-full p-2 border border-gray-300 placeholder-gray-500 rounded-lg text-xl font-bold focus:outline-none focus:border-purple-600";
monthLabel.append(monthInput);

const monthError = document.createElement("div");
monthError.classList = "Error-month text-red-500 text-xs italic mt-2";
monthLabel.append(monthError);

// Year input
const yearLabel = document.createElement("label");
yearLabel.setAttribute("for", "year");
yearLabel.classList = "w-full";
inputContainerElement.append(yearLabel);

const yearLabelText = document.createElement("div");
yearLabelText.classList =
  "block text-sm font-semibold text-gray-500 uppercase mb-2 tracking-widest";
yearLabelText.innerText = "Year";
yearLabel.append(yearLabelText);

const yearInput = document.createElement("input");
yearInput.type = "text";
yearInput.id = "year";
yearInput.name = "year";
yearInput.placeholder = "YYYY";
yearInput.classList =
  "year-input w-full p-2 border border-gray-300 placeholder-gray-500 rounded-lg text-xl font-bold focus:outline-none focus:border-purple-600";
yearLabel.append(yearInput);

const yearError = document.createElement("div");
yearError.classList = "Error-year text-red-500 text-xs italic mt-2";
yearLabel.append(yearError);
// form end

// separator section start
const separator = document.createElement("div");
separator.classList.add(
  "flex",
  "items-center",
  "mt-8",
  "md:mt-6",
  "button-container",
  "justify-center",
  "md:justify-end",
  "md:justify-center"
);
formElement.append(separator);
const line = document.createElement("hr");
line.classList.add("w-full");
separator.append(line);
const submitBtn = document.createElement("button");
submitBtn.classList.add(
  "w-14",
  "h-14",
  "bg-[#854dff]",
  "rounded-full",
  "-mt-7",
  "flex",
  "items-center",
  "justify-center",
  "active:bg-black",
  "absolute",
  "md:relative"
);
submitBtn.id = "convertBtn";
submitBtn.style = "transform: translateY(25%)";
separator.append(submitBtn);
const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
icon.setAttribute("width", "25");
icon.setAttribute("height", "30");
icon.setAttribute("viewBox", "0 0 46 44");
submitBtn.append(icon);
const gTag = document.createElementNS("http://www.w3.org/2000/svg", "g");
gTag.setAttribute("fill", "none");
gTag.setAttribute("stroke", "#FFF");
gTag.setAttribute("stroke-width", "2");
icon.append(gTag);
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  "M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
);
gTag.append(path);
// end separator section start

//result section start
const resultSection = document.createElement("section");
resultSection.classList =
  "flex flex-col gap-y-4 font-[Poppins] italic font-extrabold text-center md:text-left text-4xl md:text-7xl mt-12";
main.append(resultSection);

//years new div
const yearsDiv = document.createElement("div");
yearsDiv.classList = "flex justify-start items-center";
resultSection.append(yearsDiv);

//first part of the years
const firstLine = document.createElement("p");
firstLine.innerText = "- -";
firstLine.classList = "text-[#854dff] mr-2";
yearsDiv.append(firstLine);

//second part of the years
const firstLineWord = document.createElement("p");
firstLineWord.innerText = "years";
firstLineWord.classList = "text-left";
yearsDiv.append(firstLineWord);

//months new div
const monthsDiv = document.createElement("div");
monthsDiv.classList = "flex justify-start items-center";
resultSection.append(monthsDiv);

//first part of the months
const secondLine = document.createElement("p");
secondLine.innerText = "- -";
secondLine.classList = "text-[#854dff] mr-2";
monthsDiv.append(secondLine);

//second part of the months
const secondLineWord = document.createElement("p");
secondLineWord.innerText = "months";
secondLineWord.classList = "text-left";
monthsDiv.append(secondLineWord);

//days new div
const daysDiv = document.createElement("div");
daysDiv.classList = "flex justify-start items-center";
resultSection.append(daysDiv);

//first part of the days
const thirdLine = document.createElement("p");
thirdLine.innerText = "- -";
thirdLine.classList = "text-[#854dff] mr-2";
daysDiv.append(thirdLine);

//second part of the days
const thirdLineWord = document.createElement("p");
thirdLineWord.innerText = "days";
thirdLineWord.classList = "text-left";
daysDiv.append(thirdLineWord);
//result section end

//form selection
const form = document.querySelector("form");
// inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
// Error messages
const dayEr = document.querySelector(".Error-day");
const monthEr = document.querySelector(".Error-month");
const yearEr = document.querySelector(".Error-year");
//date of today
const today = new Date();
//function to check validation of user inputs
function validate() {
  // Convert inputs to integers
  const day = parseInt(dayInp.value);
  const month = parseInt(monthInp.value);
  const year = parseInt(yearInp.value);
  // Reset error messages
  dayEr.innerText = "";
  monthEr.innerText = "";
  yearEr.innerText = "";
  // Reset input border color
  dayInp.classList.remove("border-red-300");
  monthInp.classList.remove("border-red-300");
  yearInp.classList.remove("border-red-300");
  dayInp.classList.add("border-gray-300");
  monthInp.classList.add("border-gray-300");
  yearInp.classList.add("border-gray-300");
  //reset validation
  let validation = true;
  //check if any of the feilds are empty
  if (!dayInp.value) {
    dayEr.innerText = "this field is required";
    validation = false;
  }
  if (!monthInp.value) {
    monthEr.innerText = "this field is required";
    validation = false;
  }
  if (!yearInp.value) {
    yearEr.innerText = "this field is required";
    validation = false;
  }
  //check if the year is valid
  if (validation) {
    if (isNaN(year) || year < 1) {
      yearEr.innerText = "must be a valid year";
      validation = false;
    }
    //check if the month is valid
    if (isNaN(month) || month < 1 || month > 12) {
      monthEr.innerText = "must be a valid month";
      validation = false;
    }
    //check if the day is valid
    if (isNaN(day) || day < 1 || day > 31) {
      dayEr.innerText = "must be a valid day";
      validation = false;
    }
    //check if the date is invalid
    if (validation) {
      let date = new Date(year, month - 1, day);
      if (
        date.getFullYear() !== year ||
        date.getMonth() + 1 !== month ||
        date.getDate() !== day
      ) {
        yearEr.innerText = "must be a valid date";
        monthEr.innerText = "must be a valid date";
        dayEr.innerText = "must be a valid date";
        validation = false;
      }
    }
  }

  //check if the year is in the future
  if (year > today.getFullYear()) {
    yearEr.innerText = "The year must be in the past";
    validation = false;
  }
  //check if the month is in the future
  else if (year === today.getFullYear() && month > today.getMonth() + 1) {
    monthEr.innerText = "The month must be in the past";
    validation = false;
  }
  //check if the day is in the future
  else if (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    day > today.getDate()
  ) {
    dayEr.innerText = "The day must be in the past";
    validation = false;
  }
  return validation;
}

//function to calculate age
function calculateAge(year, month, day) {
  const birthDate = new Date(year, month - 1, day);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  return {
    year: ageYears,
    month: ageMonths,
    day: ageDays,
  };
}
//function to handle submit
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    //calculate the age and store the result in a const
    const ageObject = calculateAge(
      parseInt(yearInp.value, 10),
      parseInt(monthInp.value, 10),
      parseInt(dayInp.value, 10)
    );
    // return ageObject;
    //The calculated age will be placed instead of --
    firstLine.innerText = ageObject.year;
    secondLine.innerText = ageObject.month;
    thirdLine.innerText = ageObject.day;
  } else {
    //change the color of input boxes
    dayInp.classList.remove("border-gray-300");
    dayInp.classList.add("border-red-300");
    monthInp.classList.remove("border-gray-300");
    monthInp.classList.add("border-red-300");
    yearInp.classList.remove("border-gray-300");
    yearInp.classList.add("border-red-300");
  }
}
//when the form is submitted the handleSubmit should execute
form.addEventListener("submit", handleSubmit);
