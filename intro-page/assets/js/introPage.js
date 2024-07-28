//selecting body
const body = document.querySelector("body");
body.classList =
  "bg-[#fdfcfd] h-screen flex justify-center sm:items-start items-center border-black border-8";

//creaitng header
const header = document.createElement("header");
header.classList = "absolute md:top-14 sm:top-20 md:ml-[50%] sm:ml-[55%]";
header.style.fontFamily = "Playwrite CZ";

//title
const title = document.createElement("div");
title.innerText = "Calculate anything";
title.classList = "lg:text-4xl md:text-3xl text-xl font-semibold";
title.style.textShadow = "0 5px 10px rgb(167, 167, 167)";

//creating main
const main = document.createElement("main");

//top image
const topImg = document.createElement("img");
topImg.src = "./assets/images/top.png";
topImg.setAttribute("alt", "top image");
topImg.classList = "absolute left-0 top-0 lg:w-[60%] md:w-[70%] w-[80%]";

//age button
const ageLink = document.createElement("a");
ageLink.href = "../age-calculator/index.html";
ageLink.target = "_blank";
ageLink.classList =
  "absolute lg:left-[11%] md:left-[13%] left-[10%] lg:top-[10%] md:top-[9%] sm:top-[2%] top-[1%]";

//age image
const ageImg = document.createElement("img");
ageImg.src = "./assets/images/Slice 1.svg";
ageImg.alt = "age";
ageImg.classList =
  "drop-shadow-sm xl:size-[200px] lg:size-[170px] md:size-[140px] sm:size-[140px] size-[110px]";
//hover
ageLink.addEventListener("mouseover", () => {
  ageLink.style.scale = "1.2";
});
ageLink.addEventListener("mouseleave", () => {
  ageLink.style.scale = "1";
});
ageLink.style.transition = "all 0.3s";

//mortgage button
const mortgageLink = document.createElement("a");
mortgageLink.href = "../mortgage-repayment/index.html";
mortgageLink.target = "_blank";
mortgageLink.classList =
  "absolute xl:top-[11%] lg:top-[8%] md:top-[9%] sm:top-[8%] top-[4%] 2xl:left-[32%] lg:left-[28%] md:left-[31%] sm:left-[35%] left-[37%]";
//mortgage image
const mortgageImg = document.createElement("img");
mortgageImg.src = "./assets/images/Slice 2.svg";
mortgageImg.alt = "mortgage repayment";
mortgageImg.classList =
  "drop-shadow-sm xl:size-[250px] lg:size-[220px] md:size-[190px] sm:size-[190px] size-[130px]";
//hover
mortgageLink.addEventListener("mouseover", () => {
  mortgageLink.style.scale = "1.2";
});
mortgageLink.addEventListener("mouseleave", () => {
  mortgageLink.style.scale = "1";
});
mortgageLink.style.transition = "all 0.3s";

//bottom image
const bottomImg = document.createElement("img");
bottomImg.src = "./assets/images/bottom.png";
bottomImg.alt = "bottom image";
bottomImg.classList =
  "absolute right-0 bottom-[20%] lg:w-[55%] md:w-[65%] w-[75%]";

//tip button
const tipLink = document.createElement("a");
tipLink.href = "../tip-calculator/indx.html";
tipLink.target = "_blank";
if (document.documentElement.scrollHeight === 1366) {
  tipLink.classList = "absolute bottom-[16%] right-[48%]";
} else {
  tipLink.classList =
    "absolute xl:bottom-[15%] lg:bottom-[12%] md:bottom-[16%] bottom-[15%] lg:right-[48%] md:right-[55%] right-[62%]";
}

//tip image
const tipImg = document.createElement("img");
tipImg.src = "./assets/images/Slice 3.svg";
tipImg.alt = "tip";
tipImg.classList =
  "drop-shadow-sm xl:size-[200px] lg:size-[170px] md:size-[140px] sm:size-[140px] size-[110px]";
//hover
tipLink.addEventListener("mouseover", () => {
  tipLink.style.scale = "1.2";
});
tipLink.addEventListener("mouseleave", () => {
  tipLink.style.scale = "1";
});
tipLink.style.transition = "all 0.3s";

//creating footer
const footer = document.createElement("footer");
footer.classList = "absolute bottom-3";

//footer link
const footerLink = document.createElement("a");
footerLink.innerText = "Contact us";
footerLink.classList = "text-gray-500";

//appending elements
footer.append(footerLink);
tipLink.append(tipImg);
mortgageLink.append(mortgageImg);
ageLink.append(ageImg);
main.append(topImg, ageLink, mortgageLink, bottomImg, tipLink);
header.append(title);
body.append(header, main, footer);
