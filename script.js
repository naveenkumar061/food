const date = document.querySelector("#date");
const navbar = document.querySelector(".navbar");
const listitems = document.querySelectorAll(".navbar a");
const toggle = document.getElementsByClassName("toggler");
const section2 = document.getElementsByClassName("section-2");
const section3 = document.getElementsByClassName("section-3");
const section4 = document.getElementsByClassName("section-4");
date.innerHTML = new Date().getFullYear();
function toggler() {
  navbar.classList.toggle("add");
  toggle[0].classList.toggle("add-toggler");
  section2[0].classList.toggle("padding");
  section3[0].classList.toggle("padding");
  section4[0].classList.toggle("padding-section-4");
}
function closeNavbar() {
  navbar.classList.toggle("add");
  toggle[0].classList.toggle("add-toggler");
  section2[0].classList.toggle("padding");
  section3[0].classList.toggle("padding");
  section4[0].classList.toggle("padding-section-4");
}
