// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- 1. Loader ---
// Removed as per user request

// --- 2. Custom Cursor (Removed as per user request) ---

// --- 3. Particles.js ---
function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#0ea5e9" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#0ea5e9", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

// --- 4. Three.js Hero ---
// Three.js function removed as per user request

// --- 5. Hero Animations ---
function initHeroAnimations() {
    const tl = gsap.timeline();

    tl.from(".logo", { opacity: 0, duration: 1.2, ease: "power3.out" })
        .from(".nav-links li", { y: -50, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
        .from(".nav-cta", { scale: 0, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-text-area .section-tag", { opacity: 0, x: -30, duration: 0.8 }, "-=0.2")
        .from("#hero-title", { opacity: 0, y: 30, duration: 1 }, "-=0.5")
        .from(".hero-description", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-btns .btn", { opacity: 0, scale: 0.8, stagger: 0.2, duration: 0.8 }, "-=0.5")
        .from(".scroll-indicator", { opacity: 0, y: 20, duration: 1 }, "-=0.5");
}

// --- 6. Scroll Trigger Animations ---
function initScrollAnimations() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Course cards reveal individually for better reliability
    gsap.utils.toArray(".course-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1
        });
    });

    // Gallery staggered reveal
    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 70%",
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)"
    });

    // Contact info & form
    gsap.from(".contact-info", {
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
        opacity: 0,
        x: -50,
        duration: 1
    });
    gsap.from(".contact-form-container", {
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
        opacity: 0,
        x: 50,
        duration: 1
    });

    // Count Up Stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const countObj = { val: 0 };

        gsap.to(countObj, {
            val: target,
            duration: 2,
            scrollTrigger: {
                trigger: stat,
                start: "top 85%"
            },
            onUpdate: function () {
                stat.innerText = Math.floor(countObj.val);
            }
        });
    });
}

// --- 7. Mobile Navigation ---
function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.querySelector('i').classList.toggle('fa-bars');
        toggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.querySelector('i').classList.add('fa-bars');
            toggle.querySelector('i').classList.remove('fa-times');
        });
    });
}

// --- 8. Interactions ---


// --- 9. Data / Images Assignment ---
function assignAssets() {
    // Logo & Hero
    const navLogo = document.querySelector('.nav-logo-img');
    if (navLogo) navLogo.src = 'assets/logo.svg';
    if (document.getElementById('hero_robot_img')) document.getElementById('hero_robot_img').src = 'assets/hero_robot_new.png';

    // About
    if (document.getElementById('about_main_img')) document.getElementById('about_main_img').src = 'assets/about_main.png';
    if (document.getElementById('about_sub_img')) document.getElementById('about_sub_img').src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';

    // Projects
    if (document.getElementById('project_img_1')) document.getElementById('project_img_1').src = 'assets/project1.png';
    if (document.getElementById('project_img_2')) document.getElementById('project_img_2').src = 'assets/project2.png';

    // Blog
    if (document.getElementById('blog_img_1')) document.getElementById('blog_img_1').src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800';
    if (document.getElementById('blog_img_2')) document.getElementById('blog_img_2').src = 'assets/drone_lab.png';

    // Mentors
    if (document.getElementById('team_img_1')) document.getElementById('team_img_1').src = 'assets/mentor.png';
    if (document.getElementById('team_img_2')) document.getElementById('team_img_2').src = 'assets/mentor_2.png';
    if (document.getElementById('team_img_3')) document.getElementById('team_img_3').src = 'assets/cyber_limb.png';

    // Testimonial Users
    if (document.getElementById('user_img_1')) document.getElementById('user_img_1').src = 'https://randomuser.me/api/portraits/men/32.jpg';
    if (document.getElementById('user_img_2')) document.getElementById('user_img_2').src = 'https://randomuser.me/api/portraits/women/44.jpg';
    if (document.getElementById('user_img_3')) document.getElementById('user_img_3').src = 'https://randomuser.me/api/portraits/men/67.jpg';

    // Final Footer
    if (document.getElementById('footer_robot_img')) document.getElementById('footer_robot_img').src = 'assets/footer_robot.png';
}

// --- 10. Testimonial Slider ---
function initTestimonials() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (!track || slides.length === 0) return;

    let currentSlide = 0;

    function updateSlider() {
        gsap.to(track, {
            x: -currentSlide * 100 + '%',
            duration: 0.8,
            ease: "power3.inOut"
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        });
    }

    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 8000);
}

// --- INITIALIZE EVERYTHING ---
window.onload = () => {
    initHeroAnimations();
    initParticles();
    initScrollAnimations();
    initMobileNav();
    assignAssets();
    initTestimonials();
};
