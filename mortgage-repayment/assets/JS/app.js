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
  "bg-white sm:w-96 h-96 grid md:grid-cols-2 shadow-md rounded-xl sm:grid-cols-1 w-64";
main.append(container);
//inside container we create 2 divs
const newDivOne = document.createElement("div");
newDivOne.classList = "p-4";
const newDivTwo = document.createElement("div");
newDivTwo.classList =
  "bg-[#122f3f] md:rounded-tr-xl rounded-br-xl md:rounded-bl-[50px] p-4 rounded-bl-xl";
container.append(newDivOne, newDivTwo);
