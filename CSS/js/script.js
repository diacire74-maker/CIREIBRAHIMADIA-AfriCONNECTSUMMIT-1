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
/* ===========================
Navbar dynamique
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.1)";
        navbar.style.background = "rgba(255,255,255,.95)";

    } else {

        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255,255,255,.9)";

    }

});

/* ===========================
Bouton retour en haut
=========================== */

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   AFRICONNECT SUMMIT 2026
   main.js
========================================== */

/* ==========================
   ANNÉE DYNAMIQUE
========================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* ==========================
   DARK MODE
========================== */

const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        let currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {

            document.documentElement.setAttribute("data-theme", "light");

            localStorage.setItem("theme", "light");

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

        }

    });

}

/* ==========================
   NAVBAR AU SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ==========================
   MENU HAMBURGER
========================== */

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/* ==========================
   ONGLETS PROGRAMME
========================== */

const tabs = document.querySelectorAll(".tab-btn");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        contents.forEach(content => {

            content.classList.remove("active");

        });

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});

/* ==========================
   RETOUR EN HAUT
========================== */

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 300) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================
   ANIMATION AU SCROLL
========================== */

const hiddenElements = document.querySelectorAll(

    ".theme-card, .speaker-card, .stat-card, .why-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.20

});

hiddenElements.forEach(element => {

    observer.observe(element);

});

/* ==========================
   COMPTEURS (Accueil)
========================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const animate = () => {

        const target = +counter.dataset.target;

        const value = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (value < target) {

            counter.innerText = value + increment;

            setTimeout(animate, 10);

        } else {

            counter.innerText = target;

        }

    };

    animate();

});

/* ==========================
   FILTRE INTERVENANTS
========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        speakerCards.forEach(card => {

            if (filter === "all" ||

                card.dataset.category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/* ==========================
   VALIDATION FORMULAIRE
========================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const required = form.querySelectorAll("[required]");

        let valid = true;

        required.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "2px solid green";

            }

        });

        if (valid) {

            alert("Inscription envoyée avec succès !");

            form.reset();

        }

    });

}
// ===========================
// FILTRAGE DES INTERVENANTS
// ===========================

const filterButtons = document.querySelectorAll(".filter-btn");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Retire la classe active de tous les boutons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Active le bouton sélectionné
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Affiche ou masque les cartes
        speakerCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.getAttribute("data-category") === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===========================
// ANNÉE DYNAMIQUE
// ===========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===========================
// BOUTON RETOUR EN HAUT
// ===========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}