var services_background = document.getElementById("services_background");
var services_foreground = document.getElementById("services_foreground");
var nav_height = document.querySelector(".navbar-header").offsetHeight;

function updateButtonLink() {
    if (particles_container.clientWidth < 768) {
        home_button.href = "#services";
        nav_services.href = "#services";
        about_services_link.href = "#services";
    } else {
        home_button.href = "#services_foreground";
        nav_services.href = "#services_foreground";
        about_services_link.href = "#services_foreground";
    }
}

window.addEventListener('scroll', (e) => {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= services_foreground.offsetTop - nav_height) {
        services_background.style.backgroundAttachment = "scroll";
    } else {
        services_background.style.backgroundAttachment = "fixed";
    }
});

window.addEventListener('load', (e) => {
    updateButtonLink();
});

window.addEventListener('resize', (e) => {
    updateButtonLink();
});

const home_button = document.getElementById("home_button");
const nav_services = document.getElementById("nav_services_foreground");
const about_services_link = document.getElementById("about_services_link");
