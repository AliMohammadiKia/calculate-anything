function validation(year, month, day) {
  if (!year) {
    return {
      status: false,
      message: "year field is required",
    };
  }
  if (!month) {
    return {
      status: false,
      message: "month field is required",
    };
  }
  if (!day) {
    return {
      status: false,
      message: "day field is required",
    };
  }
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return {
      status: false,
      message: "Invalid input. Please enter numeric values.",
    };
  }
  const userDateOfBirth = new Date(year, month - 1, day);

  if (userDateOfBirth.getTime() > Date.now()) {
    return {
      status: false,
      message: "the Date you entered is in future!!",
    };
  }
  if (!day || !month || !year) {
    alert("All fields are required.");
    return false;
  }

  if (userDateOfBirth.getFullYear() === year) {
    return {
      status: true,
      code_status: 0,
      message: "valid",
    };
  } else if (userDateOfBirth.getMonth() + 1 === month) {
    return {
      status: true,
      code_status: 0,
      message: "valid",
    };
  } else if (userDateOfBirth.getDate() === day) {
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

const date = validation(2020, 20, 2);
if (date.status) {
  console.log(date.message);
} else {
  console.log(date.message);
}
