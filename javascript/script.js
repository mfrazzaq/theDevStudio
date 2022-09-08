const btn = document.getElementById("menu-button");
const nav = document.getElementById("mobile-menu");
const requestAQuote = document.getElementById("quote");

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
