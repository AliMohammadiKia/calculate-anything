//selecting the main element of the page
const main = document.querySelector("main");
//form should be here => before result section!!!!!!
//form selection
const form = document.querySelector("form");
//separator 
const separator = document.createElement("div");
separator.classList.add("flex","items-center","mt-6", "button-container" ,"justify-center", "md:justify-end" ,"md:justify-center");
form.append(separator);
const line = document.createElement("hr");
line.classList.add("w-full");
separator.append(line);
const submitBtn = document.createElement("button");
submitBtn.classList.add("w-14", "h-14", "bg-[#854dff]" ,"rounded-full" ,"-mt-7","flex", "items-center" ,"justify-center", "active:bg-black", "absolute" ,"md:relative");
submitBtn.id = "convertBtn";
submitBtn.style="transform: translateY(50%)";
separator.append(submitBtn);
const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
icon.setAttribute("xmlns","http://www.w3.org/2000/svg");
icon.setAttribute("width","25");
icon.setAttribute("height","30");
icon.setAttribute("viewBox","0 0 46 44");
submitBtn.append(icon);
const gTag = document.createElementNS("http://www.w3.org/2000/svg", "g");
gTag.setAttribute("fill","none");
gTag.setAttribute("stroke","#FFF");
gTag.setAttribute("stroke-width","2");
icon.append(gTag);
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d","M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44");
gTag.append(path);

//result section start
const resultSection = document.createElement("section");
resultSection.classList =
  "flex flex-col gap-y-4 font-[Poppins] italic font-extrabold text-center md:text-left text-4xl md:text-7xl mt-16";
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
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
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
      parseInt(yearInp.value),
      parseInt(monthInp.value),
      parseInt(dayInp.value)
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
