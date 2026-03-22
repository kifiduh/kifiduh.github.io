const bdayLabel = document.getElementById("bday");
        
function updateBirthday() {
    function timeSince(date) {
        const now = new Date();
        
        const years = now.getFullYear - date.getFullYear;
        const months = now.getMonth - date.getMonth;
        const days = now.getDay - date.getDay;
        const hours = now.getHours - date.getHours;
        const minutes = now.getMinutes - date.getMinutes;
        const seconds = now.getSeconds - date.getSeconds;
                
        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
                
    const pastDate = new Date('2008-03-07T03:11:00');
    const elapsed = timeSince(pastDate);
            
    bdayLabel.innerHTML = `i am currently ${elapsed.years} years, ${elapsed.months} months, ${elapsed.days} days, ${elapsed.hours} hours, ${elapsed.minutes} minutes, and ${elapsed.seconds} seconds old!!`   
}
        
const interval = setInterval(updateBirthday, 1000)