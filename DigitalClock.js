/* -------- DIGITAL CLOCK -------- */
function updateClock() {
    const now = new Date();   // JavaScript Date() object

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format to 2 digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();


/* -------- COUNTDOWN TIMER -------- */
// Set target date (example: New Year)
const targetDate = new Date("January 1, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "🎉 Happy New Year!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();