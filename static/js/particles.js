const container = document.getElementById('services_foreground');
const particles_canvas = document.getElementById('particles_canvas');
const particles_container = document.getElementById('particles_container');
const particles_counter = document.getElementById('particles_counter');
const particles_button = document.getElementById('particles_button');

var nav_height = document.querySelector(".navbar-header").offsetHeight;
var offset_top = container.offsetTop - nav_height;
var offset_scroll = 0;

const canvas_context = particles_canvas.getContext('2d');
const button_display = particles_button.style.display;

var canvas_width = parseInt(particles_canvas.getAttribute('width'));
var canvas_height = parseInt(particles_canvas.getAttribute('height'));

const PI_2 = Math.PI * 2;

const PARTICLE_COUNT = 99;
const PARTICLE_RADIUS = 2;
const PARTICLE_PHASE = 0.03;
const PARTICLE_MAX_SPEED = 0.1;
const PARTICLE_LIFESPAN = 5;

var PARTICLE_COLOR = {
    r: 0,
    g: 0,
    b: 0
};

const PARTICLE_RGB_STR = PARTICLE_COLOR.r + ',' + PARTICLE_COLOR.g + ',' + PARTICLE_COLOR.b;

const LINE_WIDTH = 0.8;

const FORCE_RADIUS = 100;
const SQR_FORCE_RADIUS = FORCE_RADIUS * FORCE_RADIUS;

const CONTACT_RADIUS = 10;
const SQR_CONTACT_RADIUS = CONTACT_RADIUS * CONTACT_RADIUS;

var outside_right = canvas_width + PARTICLE_RADIUS;
var outside_top = canvas_height + PARTICLE_RADIUS;


function getRandomNumber(max){
    /* cast to int isn't necessary */
    return (Math.random() * max);
}

function getRandomRangeNumber(min, max) {
    /* TODO: avoid addition+subtraction every time (constant)
             (remove parameters and use global constant)
       TODO: get 'min(speed, 0.01)' to avoid null speeds (0.01?)
     */
    return ((Math.random() * (max - min)) + min);
}

function getRandomSpeed() {
    return [
        getRandomRangeNumber(-PARTICLE_MAX_SPEED, PARTICLE_MAX_SPEED),
        getRandomRangeNumber(-PARTICLE_MAX_SPEED, PARTICLE_MAX_SPEED)
    ];
}

function isOutside(particle) {
    return (
        particle.x < -PARTICLE_RADIUS
        || particle.x > outside_right
        || particle.y < -PARTICLE_RADIUS
        || particle.y > outside_top
    )
}

function getDistance(p1, p2){
    const delta_x = Math.abs(p1.x - p2.x);
    const delta_y = Math.abs(p1.y - p2.y);

    /* avoid 'sqrt' for performance */
    return (delta_x * delta_x + delta_y * delta_y);
}

function newParticle(x, y) {
    if (x === undefined) {
        x = getRandomNumber(canvas_width);
    }
    if (y === undefined) {
        y = getRandomNumber(canvas_height);
    }
    const speed = getRandomSpeed();

    return {
        x: x,
        y: y,
        vx: speed[0],
        vy: speed[1],
        alpha: 1,
        phase: getRandomRangeNumber(0, 10)
    }
}

function newSideParticle(){
    const pos = Math.floor(getRandomRangeNumber(0, 4));
    switch(pos){
        case 0: // top
            return newParticle(undefined, -PARTICLE_RADIUS);
        case 1: // right
            return newParticle(canvas_width + PARTICLE_RADIUS, undefined);
        case 2: // bottom
            return newParticle(undefined, canvas_height + PARTICLE_RADIUS);
        case 3: // left
            return newParticle(-PARTICLE_RADIUS, undefined);
    }
}

/* recreate 'missing' particles */
function addParticles(){
    while(particles.length < nb_particles){
        particles.push(newSideParticle());
    }
}

function updateParticles() {
    line_particles.length = 0;
    for (var i = particles.length-1; i >= 0; --i) {
        const b = particles[i];
        b.x += b.vx;
        b.y += b.vy;

        if (isOutside(b)) {
            particles[i] = particles[particles.length - 1];
            particles.pop();
            continue
        }

        /* TODO: better to make separate loop only if 'mouse_in'? */
        if (mouse_in) {
            /* TODO: optimise with kind of BSP tree? */
            const distance = getDistance(b, mouse_particle);
            if (distance < SQR_CONTACT_RADIUS) {
                /* TODO: make separate function */
                particles[i] = particles[particles.length - 1];
                particles.pop();
                --nb_particles;

                b.life = PARTICLE_LIFESPAN;
                dead_particles.push(b);
                ++nb_dead_particles;

            } else if (distance < SQR_FORCE_RADIUS) {
                /* TODO: make better formula... */
                b.vx = (mouse_particle.x - b.x) / 100.0;
                b.vy = (mouse_particle.y - b.y) / 100.0;
                line_particles.push([b, distance]);
            }
        }

        b.phase += PARTICLE_PHASE;
        /* TODO: can avoid 'cos' (lookup table)? */
        b.alpha = Math.abs(Math.cos(b.phase));
    }

    /* TODO: make function */
    for (var i = nb_dead_particles - 1; i >= 0; --i) {
        const b = dead_particles[i];
        --b.life;
        if (b.life <= 0) {
            dead_particles[i] = dead_particles[dead_particles.length-1];
            dead_particles.pop();
            --nb_dead_particles;
        }
    }
}

function drawParticles() {
    /* TODO: move elsewhere! */
    /* TODO: remove hardcoded '2' => get nb digits at init */
    particles_counter.innerHTML = String(nb_particles).padStart(2, "0");

    if (nb_particles == 0) {
        particles_button.style.display = button_display;
        container.style.pointerEvents = "none";
    }

    for (let i = 0; i < particles.length; ++i) {
        const b = particles[i];
        /*canvas_context.fillStyle = 'rgba(' + PARTICLE_COLOR.r + ',' + PARTICLE_COLOR.g + ',' + PARTICLE_COLOR.b + ',' + b.alpha + ')';*/
        canvas_context.fillStyle = 'rgba(' + PARTICLE_RGB_STR + ',' + b.alpha + ')';
        canvas_context.beginPath();
        canvas_context.arc(b.x, b.y, PARTICLE_RADIUS, 0, PI_2, true);
        canvas_context.closePath();
        canvas_context.fill();
    }

    for (let i = 0; i < dead_particles.length; ++i) {
        const particle = dead_particles[i];
        const alpha = particle.life / PARTICLE_LIFESPAN;
        canvas_context.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
        canvas_context.beginPath();
        canvas_context.arc(particle.x, particle.y, PARTICLE_RADIUS + (PARTICLE_LIFESPAN - particle.life), 0, PI_2);
        canvas_context.closePath();
        canvas_context.fill();
    }
}

function drawLines() {
    if (!mouse_in || !line_particles.length) {
        return;
    }

    canvas_context.lineWidth = LINE_WIDTH;
    for (var i = 0; i < line_particles.length; i++) {
        const line_particle = line_particles[i];
        const b = line_particle[0];
        const distance = line_particle[1];

        const alpha = 1 - (distance / SQR_FORCE_RADIUS);

        canvas_context.strokeStyle = 'rgba(150,150,150,' + alpha + ')';
        /*canvas_context.lineWidth = LINE_WIDTH;*/

        canvas_context.beginPath();
        canvas_context.moveTo(b.x, b.y);
        canvas_context.lineTo(mouse_particle.x, mouse_particle.y);
        canvas_context.stroke();
        canvas_context.closePath();
    }
}

function process(){
    addParticles();
    updateParticles();

    canvas_context.clearRect(0, 0, canvas_width, canvas_height);
    drawParticles();
    drawLines();

    var x_pos = canvas_width * 0.05 - controller_image.width/2;
    canvas_context.drawImage(controller_image, x_pos, canvas_height - controller_image.height);

    if (nb_particles + nb_dead_particles > 0)  {
        window.requestAnimationFrame(process);
    }
}

function updateCanvas() {
    const width = particles_container.clientWidth;
    particles_canvas.setAttribute('width', width);
    canvas_width = width; // 'parseInt'?
    outside_right = canvas_width + PARTICLE_RADIUS;

    const height = particles_container.clientHeight;
    particles_canvas.setAttribute('height', height);
    canvas_height = height; // 'parseInt'?
    outside_top = canvas_height + PARTICLE_RADIUS;

    offset_top = container.offsetTop - nav_height;
}

function updateScroll() {
    if (offset_scroll >= offset_top) {
        particles_container.classList.remove("sticky");
        particles_container.classList.add("floaty");
    } else {
        particles_container.classList.remove("floaty");
        particles_container.classList.add("sticky");
    }
}

function updateMousePosition(pageX, pageY) {
    mouse_particle.x = pageX;

    if (particles_container.classList.contains("floaty")) {
        mouse_particle.y = pageY - container.offsetTop;
    } else {
        mouse_particle.y = pageY - (offset_scroll + nav_height);
    }

    updateCursor();
}

function updateCursor() {
    /* TODO: ADAPT TO IMAGE! */
    var x_min = canvas_width * 0.05 - controller_image.width/2;
    var x_max = x_min + controller_image.width;

    y_min = canvas_height - controller_image.height;
    y_max = canvas_height;

    if ((mouse_particle.x > x_min) && (mouse_particle.x < x_max)
        && (mouse_particle.y > y_min) && (mouse_particle.y < y_max)) {
        /* TODO: use own image/icon */
        container.style.cursor = "not-allowed";
    } else {
        container.style.cursor = "crosshair";
    }
}

function initParticles(){
    particles = [];
    nb_particles = PARTICLE_COUNT;

    for(var i = 1; i <= nb_particles; i++){
        /* spawn off screen to force random repositioning around canvas borders */
        particles.push(newParticle(-100, -100));
    }
}

function initElements() {
	particles_counter.innerHTML = String(nb_particles).padStart(2, "0");

    particles_button.style.display = "none";
    container.style.pointerEvents = "auto";
}

function start(){
    updateCanvas();
    updateScroll();
    initParticles();
    initElements();
    window.requestAnimationFrame(process);
}

function init() {
    window.addEventListener('load', (e) => {
        nav_height = document.querySelector(".navbar-header").offsetHeight;
        offset_top = container.offsetTop - nav_height;
        offset_scroll = window.pageYOffset || document.documentElement.scrollTop;

        start();
    });

    window.addEventListener('resize', (e) => {
        updateCanvas();
    });

    window.addEventListener('scroll', (e) => {
        offset_scroll = window.pageYOffset || document.documentElement.scrollTop;
        updateScroll();

        var e = e || window.event;
        updateMousePosition(e.pageX, e.pageY);
    });

    container.addEventListener('mouseenter', () => {
        mouse_in = true;
    });
    container.addEventListener('mouseleave', () => {
        mouse_in = false;
    });

    window.addEventListener('mousemove', (e) => {
        var e = e || window.event;
        updateMousePosition(e.pageX, e.pageY);
    });

    particles_button.onclick = function(){
        start();
    };
}

var nb_particles = 0;
var nb_dead_particles = 0;
var particles = [];
var dead_particles = [];
var line_particles = [];

var mouse_in = false;
var mouse_particle = {
    /* start offscreen */
    x: -FORCE_RADIUS,
    y: -FORCE_RADIUS,
};

init();

const controller_image = document.getElementById("particles_controller");
