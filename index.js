const month = document.querySelector(".month");
const weekday = document.querySelector(".weekday");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {
    const date = new Date();

    // Update the content of your HTML elements with the current date information
    month.textContent = getMonthName(date.getMonth());
    weekday.textContent = getWeekdayName(date.getDay());
    day.textContent = date.getDate();
    year.textContent = date.getFullYear();
});

// Helper function to get the month name
function getMonthName(monthIndex) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
}

// Helper function to get the weekday name
function getWeekdayName(weekdayIndex) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[weekdayIndex];
}
