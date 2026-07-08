// ===========================
// Compte à rebours
// ===========================

const eventDate = new Date("November 20, 2026 09:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);

},1000);