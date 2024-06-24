// inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// for showing the result and output
const yearOtp = document.getElementById("YY");

// FORM ELEMENT
const form = document.querySelector("form");

// ADDING THE SUMBIT EVENTLISTENTER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    if (!i.value) {
      console.log("this field is required");
      validator = false;
    }else if (monthInp.value > 12 || monthInp < 1) {
      console.log("must be a valid month");
      validator = false;
    } else if (dayInp.value > 31 || dayInp.value < 1) {
      console.log("must be a valid date");
      validator = false;
    } else  if (yearInp.value > year) {
      console.log("the Date you entered is in  the future!!");
    } else {
      validator = true;
    }
  });
  return validator;
  
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    // const d = day - dayInp.value;
    // const m = month - monthInp.value;
    // const y = year - yearInp.value;

    // yearOtp.innerHTML = y;
  }
}
handleSubmit();

// function validation(year, month, day) {
//   if (!day && !month && !year) {
//     return console.log("All field is required");
//   }
//   if (!year) {
//     console.log("year field is required");
//   }
//   if (!month) {
//     console.log("month field is required");
//   }
//   if (!day) {
//     console.log("day field is required");
//   }

//   if (isNaN(day) || isNaN(month) || isNaN(year)) {
//     console.log("Invalid input. Please enter numeric values.");
//   }
//   if (month < 1 || month > 12) {
//     console.log("Month must be between 1 and 12.");
//   }
//   if (day < 1 || day > 31) {
//     console.log("Day must be between 1 and 31.");
//   }

//   const userDateOfBirth = new Date(year, month - 1, day);

//   if (userDateOfBirth.getTime() > Date.now()) {
//     console.log("the Date you entered is in future!!");
//   }
//   if (
//     userDateOfBirth.getFullYear() === year &&
//     userDateOfBirth.getMonth() + 1 === month &&
//     userDateOfBirth.getDate() === day
//   ) {
//     return {
//       status: true,
//       code_status: 0,
//       message: "valid",
//     };
//   } else {
//     return {
//       status: false,
//       code_status: 3,
//       message: "invalid date of birth",
//     };
//   }
// }

// const date = validation("2020", "", "");
// if (date.status) {
//   console.log(date.message);
// } else {
//   console.log(date.message);
// }
