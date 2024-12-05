// Scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Nav hamburger menu selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        themeIcon.textContent = newTheme === "dark" ? "🌙" : "☀️";
    });

    // Hero section scroll animation
    const heroSection = document.querySelector(".hero");
    const moreAboutSection = document.querySelector(".more-about");
    const skillsSection = document.querySelector(".skills");
    const projectsSection = document.querySelector(".projects");
    const contactSection = document.querySelector(".contact");

    window.addEventListener("scroll", () => {
        // Trigger fade-in for the "Hero" section
        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the fade-in animation
                    heroSection.classList.add("visible");
                } else {
                    heroSection.classList.remove("visible");
                }
            },
            {
                threshold: 1, // Trigger when 10% of the section is visible
            }
        );

        // Observe the "Hero" section
        heroObserver.observe(heroSection);

        // Trigger fade-in for the "More About" section
        const moreAboutObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the fade-in animation
                    moreAboutSection.classList.add("visible");
                } else {
                    moreAboutSection.classList.remove("visible");
                }
            },
            {
                threshold: 0.5, // Trigger when 10% of the section is visible
            }
        );

        // Observe the "More About" section
        moreAboutObserver.observe(moreAboutSection);

        // Trigger fade-in for the "Skills" section
        const skillsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the fade-in animation
                    skillsSection.classList.add("visible");
                } else {
                    skillsSection.classList.remove("visible");
                }
            },
            {
                threshold: 0.5, // Trigger when 10% of the section is visible
            }
        );

        // Observe the "Skills" section
        skillsObserver.observe(skillsSection);

        // Trigger fade-in for the "Projects" section
        const projectsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the fade-in animation
                    projectsSection.classList.add("visible");
                } else {
                    projectsSection.classList.remove("visible");
                }
            },
            {
                threshold: 0.5, // Trigger when 10% of the section is visible
            }
        );

        // Observe the "Projects" section
        projectsObserver.observe(projectsSection);

        // Trigger fade-in for the "Contact" section
        const contactObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the fade-in animation
                    contactSection.classList.add("visible");
                } else {
                    contactSection.classList.remove("visible");
                }
            },
            {
                threshold: 0.5, // Trigger when 10% of the section is visible
            }
        );

        // Observe the "Contact" section
        contactObserver.observe(contactSection);
    });
});