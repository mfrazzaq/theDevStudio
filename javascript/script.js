const btn = document.getElementById("menu-button");
const nav = document.getElementById("mobile-menu");
const requestAQuote = document.getElementById("quote");
const body = document.getElementsByName("body");
const navbar = document.getElementById("navbar");

function onToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

function onRequestingAQuote() {
  document.getElementById("contact").scrollIntoView();
}

function onScroll() {
  console.log("Scrolled");
  navbar.classList.toggle("fix");
}

btn.addEventListener("click", onToggle);
requestAQuote.addEventListener("click", onRequestingAQuote);
body.addEventListener("scroll", onScroll);
