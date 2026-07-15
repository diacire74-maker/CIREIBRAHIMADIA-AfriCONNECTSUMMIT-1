// Année dynamique

document.getElementById("year").textContent =
new Date().getFullYear();
/* ===========================
Compte à rebours
=========================== */

const targetDate = new Date("November 15, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")){

        document.getElementById("days").textContent = days;

        document.getElementById("hours").textContent = hours;

        document.getElementById("minutes").textContent = minutes;

        document.getElementById("seconds").textContent = seconds;

    }

}

setInterval(updateCountdown,1000);

updateCountdown();
/* ===========================
Compteurs animés
=========================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let value = 0;

        const step = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            value += step;

            if (value >= target) {

                counter.textContent = target;

                clearInterval(timer);

            } else {

                counter.textContent = value;

            }

        },20);

    });

}

/* ===========================
Intersection Observer
=========================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

startCounters();

}

});

},{
threshold:.3
});

revealElements.forEach(section=>{

observer.observe(section);

});
/* Animation au survol */

.why-card:hover i{

    transform:scale(1.15);

    transition:.3s;

}