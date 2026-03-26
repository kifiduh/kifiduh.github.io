const bdayLabel = document.getElementById("bday");
        
function updateBirthday() {
    function timeSince(date) {
        const now = new Date();
                
        const years = now.getYear() - date.getYear()

        let months = 0
        let days = 0
        let hours = 0
        let minutes = 0

        if (now.getMonth() < date.getMonth) {
            months = date.getMonth() - now.getMonth()
        } else if (now.getMonth() >= date.getMonth()) {
            months = now.getMonth() - date.getMonth()
        }

        if (now.getDate() < date.getDate) {
            days = date.getDate() - now.getDate()
        } else if (now.getDate() >= date.getDate()) {
            days = now.getDate() - date.getDate()
        }

        if (now.getHours() < date.getHours) {
            hours = date.getHours() - now.getHours()
        } else if (now.getHours() >= date.getHours()) {
            hours = now.getHours() - date.getHours()
        }

        if (now.getMinutes() < date.getMinutes) {
            minutes = date.getMinutes() - now.getMinutes()
        } else if (now.getMinutes() >= date.getMinutes()) {
            minutes = now.getMinutes() - date.getMinutes()
        }

        const seconds = now.getSeconds() - date.getSeconds()
                
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