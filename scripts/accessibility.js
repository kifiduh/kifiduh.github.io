const checkbox = document.getElementById("checkbox")
const input = checkbox.querySelector("#dysMode")
            
if (dysMode == "true") {
    input.checked = true
} else {
    input.checked = false
}
            
input.addEventListener("change", (event) => {
    if (event.target.checked) {
        body.style.fontFamily = "sans-serif"
        localStorage.setItem("dysMode", "true")
    } else {
        body.style.fontFamily = "starshines"
        localStorage.setItem("dysMode", "false")
    }
});