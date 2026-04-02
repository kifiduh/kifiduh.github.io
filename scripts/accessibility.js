const body = document.body
const checkbox = document.querySelector("#checkbox")
const input = checkbox.querySelector("#dysMode")
            
input.addEventListener("change", (event) => {
    if (event.target.checked) {
        body.style.fontFamily = "sans-serif"
    } else {
        body.style.fontFamily = "starshines"
    }
});