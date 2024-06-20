const convertBtn = document.querySelector("#convertBtn");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
convertBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //check validation
  const ageObject = calculateAge(yearInput.value(),monthInput.value(),dayInput.value());
  return ageObject;
})
function calculateAge(year,month,day){
  const birthDate = new Date(year , month-1 , day);
  const today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();
  if(ageMonths<0){
    ageYears--;
    ageMonths+=12;
  }
  if(ageDays<0){
    ageMonths--;
    ageDays+=new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  return {
    year : ageYears,
    month : ageMonths,
    day : ageDays
  }
}
console.log(calculateAge(2003,11,3))