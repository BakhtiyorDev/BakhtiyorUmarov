const navLink = document.querySelectorAll(".nav__link");
about = document.querySelector(".about");
portfolio = document.querySelector(".portfolio");
process = document.querySelector(".process");
services = document.querySelector(".services");
skills = document.querySelector(".skills");
office = document.querySelector(".office");
contact = document.querySelector(".contact");
surfaceSlide = document.querySelector(".surface__slide");
banner = document.querySelector(".banner");
header = document.querySelector(".header");
backBtn = document.querySelector(".back");
portfolioItems = document.querySelectorAll(".portfolio__box");

for(let e=0;e<nav__link.length;e++)nav__link[e].addEventListener("click",()=>{surfaceSlide.classList.remove("noactive"),surfaceSlide.classList.add("active"),header.style.display="none",setTimeout(()=>{banner.style.display="none",backBtn.style.display="flex"},400),setTimeout(()=>{"#about"==nav__link[e].getAttribute("href")?(about.style.display="flex",process.style.display="flex",services.style.display="flex"):"#portfolio"==nav__link[e].getAttribute("href")?portfolio.style.display="flex":"#contact"==nav__link[e].getAttribute("href")&&(contact.style.display="flex")},500)});const hidePages=()=>{surfaceSlide.classList.remove("active"),surfaceSlide.classList.add("noactive"),setTimeout(()=>{backBtn.style.display="none",about.style.display="none",process.style.display="none",services.style.display="none",skills.style.display="none",office.style.display="none",portfolio.style.display="none",contact.style.display="none"},400),setTimeout(()=>{header.style.display="flex",banner.style.display="flex"},500)};backBtn.addEventListener("click",hidePages);