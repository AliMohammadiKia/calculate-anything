//body
const body = document.querySelector("body");
body.classList =
  "bg-[#e3f3fd] h-screen w-screen flex justify-center items-center";
//main element
const main = document.createElement("main");
main.classList = "w-full flex justify-center items-center"
body.append(main);
//primary container
const container = document.createElement("section");
container.className = "container bg-white  grid md:grid-cols-2 shadow-md rounded-xl sm:w-11/12 md:w-[700px] w-full";
main.append(container);
//inside container we create 2 divs
const newDivOne = document.createElement("div");
newDivOne.classList = "p-6";
const newDivTwo = document.createElement("div");
newDivTwo.classList =
  "bg-[#122f3f] md:rounded-tr-xl rounded-br-xl md:rounded-bl-[50px] p-4 rounded-bl-xl";
container.append(newDivOne, newDivTwo);
//create form
const form = document.createElement("form");
form.classsList = "flex"
newDivOne.append(form);
//create the header of the form
const formHeader = document.createElement("div");
formHeader.classList = "flex justify-between"
form.append(formHeader);
//form title
const title = document.createElement("h4");
title.innerText = "Mortgage Calculator";
title.classList = "text-slate-900 font-bold"
formHeader.append(title);
//clear all button
const clearButton = document.createElement("button");
clearButton.innerText = "Clear All";
clearButton.classList = "text-xs underline text-slate-600"
formHeader.append(clearButton);
clearButton.onsubmit = "false";
clearButton.addEventListener("click",(e)=>{
  e.preventDefault();
  //empty inputs and reset the mortgage type
});
//set the font family
body.style.fontFamily = "Plus Jakarta Sans";
//mortgage amount input box
const mortgageAmount = document.createElement("div");
mortgageAmount.classList = "flex flex-col"
const label1 = document.createElement("label");
label1.innerText = "Mortgage Amount";
label1.for = "amount";
label1.classList = "text-xs text-slate-600 mt-4";
const inputBox = document.createElement("div");
inputBox.classList = "relative";
const beforeInput1 = document.createElement("div");
beforeInput1.classList = "absolute left-0 top-0 bg-[#e3f3fd] w-[40px] h-[26px] flex items-center justify-center text-slate-800 rounded-l border border-slate-400"
const amountInput = document.createElement("input");
amountInput.id = "amount";
amountInput.classList =  "pl-[40px] border-slate-400 border rounded";
inputBox.append(beforeInput1 , amountInput);
mortgageAmount.append(label1 , inputBox);
form.append(mortgageAmount);

