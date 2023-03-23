function updateClock() {
    let now = new Date();
    let dateName = now.getDay(),
        month = now.getMonth(),
        dNumber = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        period = "AM";


        if(hour === 0) {
            hour = 12;
        }
        if(hour > 12) {
            hour = hour - 12;
            period = "PM";
        }


        const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const ids = ["dayName", "monthName", "dayNumber", "yearName", "hour", "minutes", "seconds", "period"];

        const values = [week[dateName], months[month], dNumber, year, hour, min, sec, period];

        for (let i=0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}