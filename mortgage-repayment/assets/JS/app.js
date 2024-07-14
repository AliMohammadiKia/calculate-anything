//body
const body = document.querySelector("body");
body.classList =
  "bg-[#e3f3fd] h-screen w-screen flex justify-center items-center";
//main element
const main = document.createElement("main");
body.append(main);
//primary container
const container = document.createElement("section");
container.classList =
  "bg-white  grid md:grid-cols-2 shadow-md rounded-xl sm:grid-cols-1 ";
main.append(container);
//inside container we create 2 divs
const newDivOne = document.createElement("div");
newDivOne.classList = "p-7";
const newDivTwo = document.createElement("div");
newDivTwo.classList =
  "bg-[#122f3f] md:rounded-tr-xl rounded-br-xl md:rounded-bl-[50px] p-4 rounded-bl-xl";
container.append(newDivOne, newDivTwo);
//add font 
body.style.fontFamily = "Plus Jakarta Sans"
//create form
const formEle = document.createElement("form");
newDivOne.append(formEle);
formEle.addEventListener("submit",(e) => {
  e.preventDefault();
  validation();
})
//create form header
const formHeader = document.createElement("div");
formEle.append(formHeader);
formHeader.classList = "w-full flex mb-6 justify-between flex-col sm:flex-row";
//title
const title = document.createElement("h1");
formHeader.append(title);
title.innerText = "Mortgage Calculator";
title.classList = "font-semibold text-slate-800 mb-2"
//clear all button
const clearBtn = document.createElement("button");
formHeader.append(clearBtn);
clearBtn.innerText = "Clear All";
clearBtn.type = "button";
clearBtn.classList = "text-xs text-slate-500 border-b border-slate-400 font-medium w-12 ";
clearBtn.addEventListener("click",(e) => {
  e.preventDefault();
  amountInput.value = "";
  termInput.value = "";
  rateInput.value = "";
  repaymentOption.checked = false;
  interestOnlyOption.checked = false;
  updateRadioStyle();
  resetStyle()
})
//mortgage amount div
const mortgageAmountDiv = document.createElement("div");
formEle.append(mortgageAmountDiv);
const mortgageAmountp = document.createElement("p");
mortgageAmountDiv.append(mortgageAmountp);
mortgageAmountp.innerText = "Mortagage Amount";
mortgageAmountp.classList = "font-medium text-slate-500 text-xs";
//mortgage amount input box
const amountInputBox = document.createElement("div");
mortgageAmountDiv.append(amountInputBox);
amountInputBox.classList = "flex mt-2 border border-slate-400 rounded";
const euroBox = document.createElement("label");
amountInputBox.append(euroBox);
euroBox.setAttribute("for","amountInput");
euroBox.classList = "bg-[#e3f3fd] w-9 h-9 flex justify-center items-center rounded-s";
const euroSign = document.createElement("p");
euroBox.append(euroSign);
euroSign.innerText = '£';
euroSign.classList = "font-semibold text-sm text-slate-500";
const amountInput = document.createElement("input");
amountInputBox.append(amountInput);
amountInput.classList = "w-full focus:outline-none px-3 text-sm text-slate-800 font-semibold rounded-e";
amountInput.setAttribute("id","amountInput");
const amountEr = document.createElement("div");
mortgageAmountDiv.append(amountEr);
amountEr.classList ="text-[#d73328] mt-2 text-xs";
//mortgage term and interest rate section
const termAndRate = document.createElement("div");
formEle.append(termAndRate);
termAndRate.classList = "mt-5 w-full flex justify-between flex-col sm:flex-row"
//mortgage term div
const mortgageTerm = document.createElement("div");
termAndRate.append(mortgageTerm);
mortgageTerm.classList = "sm:w-[48%] sm:mb-0 mb-6";
const mortgageTermP = document.createElement("p");
mortgageTerm.append(mortgageTermP);
mortgageTermP.innerText = "Mortgage Term";
mortgageTermP.classList = "font-medium text-slate-500 text-xs mb-2";
const termInputBox = document.createElement("div");
mortgageTerm.append(termInputBox);
const termInput = document.createElement("input");
termInputBox.append(termInput);
termInput.classList = "w-8/12 focus:outline-none px-3 text-sm text-slate-800 font-semibold rounded-s"
termInputBox.classList = "flex border border-slate-400 rounded";
termInput.setAttribute("id","termInput");
const yearsBox = document.createElement("label");
termInputBox.append(yearsBox);
yearsBox.setAttribute("for","termInput");
yearsBox.classList = "w-4/12 h-9 bg-[#e3f3fd] flex justify-center items-center rounded-e";
const yearSign = document.createElement("p");
yearsBox.append(yearSign);
yearSign.innerText = "years";
yearSign.classList = "font-semibold text-sm text-slate-500";
const termEr = document.createElement("div");
mortgageTerm.append(termEr);
termEr.classList ="text-[#d73328] mt-2 text-xs";
//interest Rate div
const interestRate = document.createElement("div");
termAndRate.append(interestRate);
interestRate.classList = "sm:w-[48%]";
const interestP = document.createElement("p");
interestRate.append(interestP);
interestP.innerText = "Interest Rate";
interestP.classList = "font-medium text-slate-500 text-xs mb-2";
const rateInputBox = document.createElement("div");
interestRate.append(rateInputBox);
const rateInput = document.createElement("input");
rateInputBox.append(rateInput);
rateInput.classList = "w-9/12 focus:outline-none px-3 text-sm text-slate-800 font-semibold rounded-s";
rateInputBox.classList = "flex border border-slate-400 rounded";
rateInput.setAttribute("id","rateInput");
const percentBox = document.createElement("label");
rateInputBox.append(percentBox);
percentBox.setAttribute("for","rateInput");
percentBox.classList = "w-3/12 h-9 bg-[#e3f3fd] flex justify-center items-center rounded-e";
const percentSign = document.createElement("p");
percentBox.append(percentSign);
percentSign.innerText = "%";
percentSign.classList = "font-semibold text-sm text-slate-500";
const rateEr = document.createElement("div");
interestRate.append(rateEr);
rateEr.classList ="text-[#d73328] mt-2 text-xs";
//mortgage type
const mortgageType = document.createElement("div");
formEle.append(mortgageType);
mortgageType.classList = "mt-5";
const mortgageTypeP = document.createElement("p");
mortgageType.append(mortgageTypeP);
mortgageTypeP.innerText = "Mortgage Type";
mortgageTypeP.classList = "font-medium text-slate-500 text-xs mb-2";
const repaymentDiv = document.createElement("div");
mortgageType.append(repaymentDiv);
repaymentDiv.classList = "w-full h-9 border border-slate-400 rounded mb-2 ps-4 pt-1";
const interestOnlyDiv = document.createElement("div");
mortgageType.append(interestOnlyDiv);
interestOnlyDiv.classList = "w-full h-9 border border-slate-400 rounded ps-4 pt-1";
const repaymentOption = document.createElement("input");
repaymentDiv.append(repaymentOption);
repaymentOption.type = "radio";
repaymentOption.id = "repayment";
repaymentOption.name = "mortgage-type";
repaymentOption.value = "repayment";
const repaymentLabel = document.createElement("label");
repaymentDiv.append(repaymentLabel);
repaymentLabel.innerText = "Repayment";
repaymentLabel.setAttribute("for","repayment");
repaymentLabel.classList = "ml-4 text-slate-700 font-semibold text-sm";
const interestOnlyOption = document.createElement("input");
interestOnlyDiv.append(interestOnlyOption);
interestOnlyOption.type = "radio";
interestOnlyOption.id = "interest-only";
interestOnlyOption.name = "mortgage-type";
interestOnlyOption.value = "interest-only";
const interestLabel = document.createElement("label");
interestOnlyDiv.append(interestLabel);
interestLabel.innerText = "Interest Only";
interestLabel.setAttribute("for","interest-only");
interestLabel.classList = "ml-4 text-slate-700 font-semibold text-sm";
const typeEr = document.createElement("div");
mortgageType.append(typeEr);
typeEr.classList ="text-[#d73328] mt-2 text-xs";
//calculate repayments button
const cRBtn = document.createElement("button");
formEle.append(cRBtn);
cRBtn.classList = "mt-8 bg-[#d7da2f] w-64 flex h-10 rounded-3xl pl-8 pt-2";
const calculatorIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
cRBtn.append(calculatorIcon);
calculatorIcon.setAttribute("width","24");
calculatorIcon.setAttribute("height","24");
calculatorIcon.setAttribute("fill","none");
calculatorIcon.setAttribute("viewBox","0 0 24 24");
const pathEle = document.createElementNS("http://www.w3.org/2000/svg","path");
calculatorIcon.append(pathEle);
pathEle.setAttribute("fill","#133041");
pathEle.setAttribute("d","M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z");
const buttonPEle = document.createElement("p");
cRBtn.append(buttonPEle);
buttonPEle.classList ="ml-3 font-semibold text-sm text-slate-700 mt"
buttonPEle.innerText = "Calculate Repayments";
//change the style when we click on an element
amountInput.addEventListener("focus" , () => {
  amountInputBox.classList.remove("border-slate-400");
  amountInputBox.classList.add("border-[#d7da2f]");
  euroBox.classList.remove("bg-[#e3f3fd]");
  euroBox.classList.add("bg-[#d7da2f]");
})
amountInput.addEventListener("blur",() => {
  amountInputBox.classList.remove("border-[#d7da2f]");
  amountInputBox.classList.add("border-slate-400");
  euroBox.classList.remove("bg-[#d7da2f]");
  euroBox.classList.add("bg-[#e3f3fd]");
})
termInput.addEventListener("focus",() => {
  termInputBox.classList.remove("border-slate-400");
  termInputBox.classList.add("border-[#d7da2f]");
  yearsBox.classList.remove("bg-[#e3f3fd]");
  yearsBox.classList.add("bg-[#d7da2f]");
})
termInput.addEventListener("blur",() => {
  termInputBox.classList.remove("border-[#d7da2f]");
  termInputBox.classList.add("border-slate-400");
  yearsBox.classList.remove("bg-[#d7da2f]");
  yearsBox.classList.add("bg-[#e3f3fd]");
})
rateInput.addEventListener("focus",() => {
  rateInputBox.classList.remove("border-slate-400");
  rateInputBox.classList.add("border-[#d7da2f]");
  percentBox.classList.remove("bg-[#e3f3fd]");
  percentBox.classList.add("bg-[#d7da2f]");
})
rateInput.addEventListener("blur",() => {
  rateInputBox.classList.remove("border-[#d7da2f]");
  rateInputBox.classList.add("border-slate-400");
  percentBox.classList.remove("bg-[#d7da2f]");
  percentBox.classList.add("bg-[#e3f3fd]");
})
function updateRadioStyle(){
  if(repaymentOption.checked){
    repaymentDiv.classList.replace("border-slate-400", "border-[#d7da2f]");
    repaymentDiv.classList.remove("bg-white");
    repaymentDiv.classList.add("bg-[#fbfbeb]");
    interestOnlyDiv.classList.replace("border-[#d7da2f]", "border-slate-400");
    interestOnlyDiv.classList.remove("bg-[#fbfbeb]");
    interestOnlyDiv.classList.add("bg-white");
    repaymentOption.classList.add("accent-[#d7da2f]");
    repaymentOption.classList.add("")
  }else if(interestOnlyOption.checked){
    repaymentDiv.classList.replace("border-[#d7da2f]", "border-slate-400");
    repaymentDiv.classList.remove("bg-[#fbfbeb]");
    repaymentDiv.classList.add("bg-white");
    interestOnlyDiv.classList.replace("border-slate-400", "border-[#d7da2f]");
    interestOnlyDiv.classList.remove("bg-white");
    interestOnlyDiv.classList.add("bg-[#fbfbeb]");
    interestOnlyOption.classList.add("accent-[#d7da2f]");
  }else{
    repaymentDiv.classList.replace("border-[#d7da2f]", "border-slate-400");
    repaymentDiv.classList.remove("bg-[#fbfbeb]");
    repaymentDiv.classList.add("bg-white");
    interestOnlyDiv.classList.replace("border-[#d7da2f]", "border-slate-400");
    interestOnlyDiv.classList.remove("bg-[#fbfbeb]");
    interestOnlyDiv.classList.add("bg-white");
  }
}
repaymentDiv.addEventListener("click",() => {
  repaymentOption.checked = true;
  updateRadioStyle();
})
interestOnlyDiv.addEventListener("click",() => {
  interestOnlyOption.checked = true;
  updateRadioStyle();
})
//function for checking the validation of user's inputs
let areValidInputs = true;
function validation() {
  if(!amountInput.value){
    amountEr.innerText = "This feild is required";
    amountInputBox.classList.replace("border-slate-400","border-[#d73328]");
    euroBox.classList.remove("bg-[#e3f3fd]");
    euroBox.classList.add("bg-[#d73328]");
    euroSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
  if(!termInput.value){
    termEr.innerText = "This feild is required";
    termInputBox.classList.replace("border-slate-400","border-[#d73328]");
    yearsBox.classList.remove("bg-[#e3f3fd]");
    yearsBox.classList.add("bg-[#d73328]");
    yearSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
  if(!rateInput.value){
    rateEr.innerText = "This feild is required";
    rateInputBox.classList.replace("border-slate-400","border-[#d73328]");
    percentBox.classList.remove("bg-[#e3f3fd]");
    percentBox.classList.add("bg-[#d73328]");
    percentSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
  if(!repaymentOption.checked && !interestOnlyOption.checked){
    typeEr.innerText = "This feild is required";
    areValidInputs = false;
  }
  if(isNaN(amountInput.value) || amountInput.value<0){
    amountEr.innerText = "Invalid value";
    amountInputBox.classList.replace("border-slate-400","border-[#d73328]");
    euroBox.classList.remove("bg-[#e3f3fd]");
    euroBox.classList.add("bg-[#d73328]");
    euroSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
  if(isNaN(termInput.value) || termInput.value<0){
    termEr.innerText = "Invalid value";
    termInputBox.classList.replace("border-slate-400","border-[#d73328]");
    yearsBox.classList.remove("bg-[#e3f3fd]");
    yearsBox.classList.add("bg-[#d73328]");
    yearSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
  if(isNaN(rateInput.value) || rateInput.value<0){
    rateEr.innerText = "Invalid value";
    rateInputBox.classList.replace("border-slate-400","border-[#d73328]");
    percentBox.classList.remove("bg-[#e3f3fd]");
    percentBox.classList.add("bg-[#d73328]");
    percentSign.classList.replace("text-slate-500","text-white");
    areValidInputs = false;
  }
}
//reset style function
function resetStyle() {
  if(!areValidInputs){
    areValidInputs = true;
    amountEr.innerText = "";
    amountInputBox.classList.replace("border-[#d73328]","border-slate-400");
    euroBox.classList.remove("bg-[#d73328]");
    euroBox.classList.add("bg-[#e3f3fd]");
    euroSign.classList.replace("text-white","text-slate-500");
    termEr.innerText = "";
    termInputBox.classList.replace("border-[#d73328]","border-slate-400");
    yearsBox.classList.remove("bg-[#d73328]");
    yearsBox.classList.add("bg-[#e3f3fd]");
    yearSign.classList.replace("text-white","text-slate-500");
    rateEr.innerText = "";
    rateInputBox.classList.replace("border-[#d73328]","border-slate-400");
    percentBox.classList.remove("bg-[#d73328]");
    percentBox.classList.add("bg-[#e3f3fd]");
    percentSign.classList.replace("text-white","text-slate-500");
    typeEr.innerText = "";
  }
  
}
