//Nav bar one js

const a = document.getElementById("nav")
const b = document.getElementById("close_icon")
function navresponsive() {
    a.classList.toggle("show")
    document.body.classList.toggle("overflow_hidden")
    b.classList.toggle("close_icon")
}

