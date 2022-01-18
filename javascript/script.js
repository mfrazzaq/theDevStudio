const btn = document.getElementById("menu-button")
const nav = document.getElementById("mobile-menu")

function onToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle("no-scroll")
}

btn.addEventListener('click', onToggle)