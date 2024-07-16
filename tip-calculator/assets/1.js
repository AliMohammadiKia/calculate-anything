const body = document.querySelector("body");
body.style.backgroundColor = "hsl(185, 41%, 84%)";
body.classList =
  " flex flex-col justify-center items-center h-screen gap-10 font-['Space_Mono']";

const divtag = document.createElement("div");
divtag.classList = "flex flex-col justify-center items-center gap-2";
body.appendChild(divtag);

const pelement = document.createElement("p");
pelement.style.color = "hsl(186, 14%, 43%)";
pelement.textContent = "S P L I";
pelement.classList = "text-lg font-bold ";
divtag.appendChild(pelement);

const pelement2 = document.createElement("p");
pelement2.style.color = "hsl(186, 14%, 43%)";
pelement2.textContent = "T T E R";
pelement2.classList = "text-lg font-bold";
divtag.appendChild(pelement2);

const main = document.createElement("main");
main.classList = "bg-white w-1/2 h-96 rounded-2xl grid grid-cols-2 gap-5 p-6 ";
body.appendChild(main);

const div1 = document.createElement("div");
div1.classList = "rounded-2xl w-full  col-span-2 sm:col-span-1";
main.appendChild(div1);

const div2 = document.createElement("div");
div2.classList = "rounded-2xl col-span-2 sm:col-span-1 div2";
div2.style.backgroundColor = "hsl(183, 100%, 15%)";
main.appendChild(div2);



// -----------

const divcontainer = document.createElement("div");
div1.appendChild(divcontainer);
divcontainer.classList = "flex flex-col  gap-y-12";

const divp1 = document.createElement("div");
divcontainer.appendChild(divp1);
div1.classList = " justify-between justify-items-stretch items-center w-11/12";
const divp2 = document.createElement("div");
divcontainer.appendChild(divp2);
div2.classList = " justify-between justify-items-stretch items-center";
const divp3 = document.createElement("div");
divcontainer.appendChild(divp3);
divp3.classList = " justify-between justify-items-stretch items-center ";

const bill = document.createElement("label");
bill.setAttribute("id", "bill");
bill.classList = "font-['Space_Mono'] 	display: block   text-xs font-bold mb-1";
bill.style.color = "hsl(186, 14%, 43%)";
divp1.appendChild(bill);
bill.textContent = "Bill";

const billinput = document.createElement("input");
billinput.value = "0.0";
billinput.setAttribute("id", "bill");
billinput.setAttribute("id", "bills");
billinput.setAttribute("type", "number");
billinput.setAttribute("placeholder", "0");
divp1.appendChild(billinput);
billinput.style.backgroundColor = "hsl(189, 41%, 97%)";
billinput.classList = "rounded 	bg-no-repeat text-right font-bold mb-8 w-11/12";
billinput.style.backgroundImage = "url(assets/images/icon-dollar.svg)";
billinput.style.color = "hsl(183, 100%, 15%)";

const tip = document.createElement("label");
tip.setAttribute("id", "tipp");
tip.classList = "font-['Space_Mono']  text-xs font-bold mb-1";
tip.style.color = "hsl(186, 14%, 43%)";
divp2.appendChild(tip);
tip.textContent = "Select Tip %";

const tipamount = document.createElement("div");
divp2.appendChild(tipamount);
tipamount.classList = "grid  grid-cols-3 gap-2  mt-1 ";

const tipamount5 = document.createElement("div");
tipamount5.textContent = "5%";
tipamount.appendChild(tipamount5);
tipamount5.style.backgroundColor = "hsl(183, 100%, 15%)";
tipamount5.style.color = "hsl(0, 0%, 100%)";
tipamount5.classList = "rounded tips   text-center";

const tipamount10 = document.createElement("div");
tipamount10.textContent = "10%";
tipamount.appendChild(tipamount10);
tipamount10.style.backgroundColor = "hsl(183, 100%, 15%)";
tipamount10.style.color = "hsl(0, 0%, 100%)";
tipamount10.classList = "rounded tips text-center";

const tipamount15 = document.createElement("div");
tipamount15.textContent = "15%";
tipamount.appendChild(tipamount15);
tipamount15.style.backgroundColor = "hsl(183, 100%, 15%)";
tipamount15.style.color = "hsl(0, 0%, 100%)";
tipamount15.classList = "rounded tips active-tip text-center";

const tipamount25 = document.createElement("div");
tipamount25.textContent = "25%";
tipamount.appendChild(tipamount25);
tipamount25.style.backgroundColor = "hsl(183, 100%, 15%)";
tipamount25.style.color = "hsl(0, 0%, 100%)";
tipamount25.classList = "rounded tips text-center";

const tipamount50 = document.createElement("div");
tipamount50.textContent = "50%";
tipamount.appendChild(tipamount50);
tipamount50.style.backgroundColor = "hsl(183, 100%, 15%)";
tipamount50.style.color = "hsl(0, 0%, 100%)";
tipamount50.classList = "rounded tips text-center";

const tipamount6 = document.createElement("input");
tipamount6.setAttribute("type", "number");
tipamount6.setAttribute("placeholder", "custom");
tipamount.appendChild(tipamount6);
tipamount6.classList = " rounded text-center";
tipamount6.style.backgroundColor = "hsl(189, 41%, 97%)";
tipamount6.style.color = "hsl(183, 100%, 15%)";

const people = document.createElement("label");
people.setAttribute("id", "people");
people.classList = "font-['Space_Mono']  text-xs font-bold ";
people.style.color = "hsl(186, 14%, 43%)";
divp3.appendChild(people);
people.textContent = "Number of Poeple";

const peopleinput = document.createElement("input");
peopleinput.value = "1";
peopleinput.setAttribute("id", "people");
peopleinput.setAttribute("id", "peoplei");
peopleinput.setAttribute("type", "number");
peopleinput.setAttribute("placeholder", "0");
divp3.appendChild(peopleinput);
peopleinput.style.backgroundColor = "hsl(189, 41%, 97%)";
peopleinput.classList = "rounded	bg-no-repeat text-right font-bold w-11/12 ";
peopleinput.style.backgroundImage = "url(assets/images/icon-person.svg)";
peopleinput.style.color = "hsl(183, 100%, 15%)";
const error = document.createElement("label");
error.classList = "error hidden";
divp3.appendChild(error);
error.textContent = "number of people is wrong";

// --------for result section
// let tipPerPERSON = document.createElement("p");
// div2.appendChild(tipPerPERSON);
// let totalPerPerson = document.createElement("p");
// div2.appendChild(totalPerPerson);

// ------
billinput.addEventListener("input", billInputFunc);
peopleinput.addEventListener("input", peopleinputFunc);

const tipss = document.querySelectorAll(".tips");
// console.log(tipss);
tipss.forEach((val) => {
  val.addEventListener("click", handleClick);
});
tipamount6.addEventListener("input", tipInputFunc);

let billValue = 0.0;
let peeopleValue = 1;
let tipValue = 0.15;

function billInputFunc() {
  billValue = parseFloat(billinput.value);
  calculateTip();
}

function peopleinputFunc() {
  peeopleValue = parseFloat(peopleinput.value);

  if (peeopleValue < 1) {
    error.style.display = "flex";
    peopleinput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleinput.style.border = "none";
    calculateTip();
  }
}

function tipInputFunc() {
  tipValue = parseFloat(tipamount6.value / 100);

  tipss.forEach(function (val) {
    val.classList.remove("active-tip");
  });
  calculateTip();
}

function handleClick(event) {
  tipss.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

//----------------for-result-srction
function calculateTip() {
  if (peeopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peeopleValue;
    let total = (billValue + tipAmount) / peeopleValue;
    tipPerPERSON.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
  // console.log(calculateTip);
}



const parent = document.createElement("div")
parent.classList="pt-10 px-5 grid grid-rows-2 gap-10"
div2.appendChild(parent)



const div3 = document.createElement("div")
div3.classList=" col-span-2  grid grid-cols-2 "
parent.appendChild(div3)


const div5 = document.createElement("div")
div5.classList="col-span-1 "
div3.appendChild(div5)

const firsp = document.createElement("p")
firsp.classList="text-white  text-sm font-bold mb-1 md:text-xs"
firsp.textContent="Tip Amount"
div5.appendChild(firsp)


const secondp = document.createElement("p")
secondp.classList="  text-xs font-bold"
secondp.textContent="/ person"
secondp.style.color="hsl(184, 14%, 56%)"
div5.appendChild(secondp)

const tipPerPERSON = document.createElement("div")
tipPerPERSON.classList=" font-bold  col-span-1 px-3 md:text-3xl sm:text-2xl text-4xl"
tipPerPERSON.style.color="hsl(172, 67%, 45%)"
tipPerPERSON.textContent="$0.00"
div3.appendChild(tipPerPERSON)













const div4 = document.createElement("div")
div4.classList="col-span-2  grid grid-cols-2 "
parent.appendChild(div4)


const div7 = document.createElement("div")
div7.classList="col-span-1 "
div4.appendChild(div7)

const firsp2 = document.createElement("p")
firsp2 .classList="text-white  text-sm font-bold mb-1"
firsp2 .textContent="Total"
div7.appendChild(firsp2)

const secondp2= document.createElement("p")
secondp2.classList="  text-xs font-bold"
secondp2.textContent="/ person"
secondp2.style.color="hsl(184, 14%, 56%)"
div7.appendChild(secondp2)

const totalPerPerson = document.createElement("div")
totalPerPerson.classList="  font-bold  col-span-1  px-3 md:text-3xl sm:text-2xl text-4xl "
totalPerPerson.style.color="hsl(172, 67%, 45%)"
totalPerPerson.textContent="$0.00"
div4.appendChild(totalPerPerson)













const btn = document.createElement("button")
btn.classList="col-span-2 rounded font-bold py-2 mt-12 mb-4"
btn.textContent="RESET"
btn.style.color="hsl(187, 10%, 32%)"
btn.style.backgroundColor="hsl(172, 67%, 45%)"
parent.appendChild(btn)


btn.addEventListener("click",()=>{
  billinput.value = 0.0;
  billInputFunc()
  peopleinput.value = 1;
  peopleinputFunc()
  tipamount6.value =" "
 
})