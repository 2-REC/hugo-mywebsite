
function updateButtonLink() {
    if (part_container.clientWidth < 768) {
        home_button.href = "#services";
        nav_services.href = "#services";
        about_services_link.href = "#services";
    } else {
        home_button.href = "#services_foreground";
        nav_services.href = "#services_foreground";
        about_services_link.href = "#services_foreground";
    }
}

window.addEventListener("scroll", (e) => {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= foreground.offsetTop - navbar_height) {
        background.style.backgroundAttachment = "scroll";
    } else {
        background.style.backgroundAttachment = "fixed";
    }
});

window.addEventListener("load", (e) => {
    updateButtonLink();
});

window.addEventListener("resize", (e) => {
    updateButtonLink();
});


const part_container = document.getElementById("particles_container");
const background = document.getElementById("services_background");
const foreground = document.getElementById("services_foreground");
const navbar_height = document.querySelector(".navbar-header").offsetHeight;

const home_button = document.getElementById("home_button");
const nav_services = document.getElementById("nav_services_foreground");
const about_services_link = document.getElementById("about_services_link");
