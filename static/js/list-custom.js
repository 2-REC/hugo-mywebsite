
function updateServivesLink() {
    if (document.body.clientWidth < 768) {
        nav_services.href = "#services";
    } else {
        nav_services.href = "#services_foreground";
    }
}

window.addEventListener("load", (e) => {
    updateServivesLink();
});

window.addEventListener("resize", (e) => {
    updateServivesLink();
});

const nav_services = document.getElementById("nav_services_foreground");
