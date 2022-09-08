const btn = document.getElementById("menu-button");
const nav = document.getElementById("mobile-menu");
const requestAQuote = document.getElementById("quote");
const home = document.getElementsByClassName("nav-home");
const services = document.getElementsByClassName("nav-services");
const work = document.getElementsByClassName("nav-work");
const clients = document.getElementsByClassName("nav-clients");
const contact = document.getElementsByClassName("nav-contact");

function onToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

function onRequestingAQuote() {
  document.getElementById("contact").scrollIntoView();
}

btn.addEventListener("click", onToggle);
requestAQuote.addEventListener("click", onRequestingAQuote);
services.onclick = onToggle;
home.addEventListener("click", onToggle);
services.addEventListener("click", onToggle);
work.addEventListener("click", onToggle);
clients.addEventListener("click", onToggle);
contact.addEventListener("click", onToggle);
