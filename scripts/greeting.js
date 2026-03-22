const mainParagraph = document.getElementById("main-paragraph");
        
const now = new Date();
const hours = now.getHours();
        
if (hours < 12) {
    mainParagraph.innerHTML = "<i>good morning, welcome to my website! <br> click one of the images below to navigate through the site! </i>"
} else if (hours >= 12 || hours < 19) {
    mainParagraph.innerHTML = "<i>good evening, welcome to my website! <br> click one of the images below to navigate through the site! </i>"
} else if (hours >= 19) {
    mainParagraph.innerHTML = "<i>good night, welcome to my website! <br> click one of the images below to navigate through the site! </i>"
}