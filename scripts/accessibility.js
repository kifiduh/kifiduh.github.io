input.addEventListener("change", (event) => {
    if (event.target.checked) {
        body.style.fontFamily = "sans-serif"
        localStorage.setItem("dysMode", "true")
    } else {
        body.style.fontFamily = "starshines"
        localStorage.setItem("dysMode", "false")
    }
});