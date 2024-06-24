function validation(year, month, day) {
   if (!day && !month && !year) {
   return console.log("All field is required");
  }
  if (!year) {
     console.log("year field is required");
  }
  if (!month) {
    console.log("month field is required");
  }
  if (!day) {
    console.log("day field is required");
  }

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("Invalid input. Please enter numeric values.");
  }
  if (month < 1 || month > 12) {
    console.log("Month must be between 1 and 12.");
  }
  if (day < 1 || day > 31) {
    console.log("Day must be between 1 and 31.");
  }

  const userDateOfBirth = new Date(year, month - 1, day);

  if (userDateOfBirth.getTime() > Date.now()) {
    console.log("the Date you entered is in future!!");
  }
  if (
    userDateOfBirth.getFullYear() === year &&
    userDateOfBirth.getMonth() + 1 === month &&
    userDateOfBirth.getDate() === day
  ) {
    return {
      status: true,
      code_status: 0,
      message: "valid",
    };
  } else {
    return {
      status: false,
      code_status: 3,
      message: "invalid date of birth",
    };
  }
}

const date = validation("2020", "", "");
if (date.status) {
  console.log(date.message);
} else {
  console.log(date.message);
}
