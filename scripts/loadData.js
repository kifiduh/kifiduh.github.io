const dysMode = localStorage.getItem("dysMode")
            
const body = document.body
const checkbox = document.querySelector("#checkbox")
const input = checkbox.querySelector("#dysMode")
            
if (dysMode == "true") {
    body.style.fontFamily = "sans-serif"
    input.checked = true
} else {
    body.style.fontFamily = "starshines"
    input.checked = false
}
            
// console.log(dysMode)