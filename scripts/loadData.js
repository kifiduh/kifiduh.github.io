const dysMode = localStorage.getItem("dysMode")
            
const body = document.body
            
if (dysMode == "true") {
    body.style.fontFamily = "sans-serif"
} else {
    body.style.fontFamily = "starshines"
}
            
// console.log(dysMode)