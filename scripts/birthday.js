const bdayLabel = document.getElementById("bday");
        
function updateBirthday() {

    function timeSince(pastDateString) {
        const pastDate = new Date(pastDateString);
        const now = new Date();

        const differenceInMs = now.getTime() - pastDate.getTime();

        const msInSecond = 1000;
        const msInMinute = msInSecond * 60;
        const msInHour = msInMinute * 60;
        const msInDay = msInHour * 24;

        const days = Math.floor(differenceInMs / msInDay);
        const hours = Math.floor((differenceInMs % msInDay) / msInHour);
        const minutes = Math.floor((differenceInMs % msInHour) / msInMinute);
        const seconds = Math.floor((differenceInMs % msInMinute) / msInSecond);

        return `i am currently ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old!!`
    }
                
    const pastDate = new Date('2008-03-07T03:11:00');
    const elapsed = timeSince(pastDate);
            
    bdayLabel.innerHTML = elapsed
}
        
const interval = setInterval(updateBirthday, 1000)