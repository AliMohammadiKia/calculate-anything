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
container.className = "bg-white  grid md:grid-cols-2 shadow-md rounded-xl  md:w-[700px] sm:w-4/5 w-full";
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
form.append(formHeader);
const title = document.createElement("h4");
title.innerText = "Mortgage Calculator";
title.classList = "text-slate-900 font-bold"
formHeader.append(title);
const clearButton = document.createElement("button");
clearButton.innerText = "Clear All";
clearButton.classList = ""
formHeader.append(clearButton);
//set the font family
body.style.fontFamily = "Plus Jakarta Sans";
