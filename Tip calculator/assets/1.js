const body = document.querySelector("body")
body.style.backgroundColor= "hsl(185, 41%, 84%)"
body.classList=" flex flex-col justify-center items-center h-screen gap-10 font-['Space_Mono']"





const divtag = document.createElement("div")
divtag.classList="flex flex-col justify-center items-center gap-2"
body.appendChild(divtag)

const pelement = document.createElement("p")
pelement.style.color ="hsl(186, 14%, 43%)"
pelement.textContent="S P L I"  
pelement.classList="text-lg font-bold "
divtag.appendChild(pelement)

const pelement2 = document.createElement("p")
pelement2.style.color ="hsl(186, 14%, 43%)"
pelement2.textContent= "T T E R"
pelement2.classList="text-lg font-bold"
divtag.appendChild(pelement2)

const main = document.createElement("main")
main.classList="bg-white w-1/2 h-96 rounded-2xl grid grid-cols-2 gap-5 p-6 "
body.appendChild(main)

const  div1 = document.createElement("div")
div1 .classList="rounded-2xl  col-span-2 sm:col-span-1"
main.appendChild(div1)

const  div2 = document.createElement("div")
div2 .classList="rounded-2xl col-span-2 sm:col-span-1 div2"
div2.style.backgroundColor="hsl(183, 100%, 15%)"
main.appendChild(div2)




























// const main = document.querySelector("main")
// main.classList="grid grid-rows-[200px_minmax(900px,_1fr)_100px]"
