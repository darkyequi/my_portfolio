// Smooth scrolling is handled by CSS scroll-behavior: smooth;

// Handle navigation clicks for smooth scrolling
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
document.querySelectorAll('.btn-cv a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Add active class to navbar links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }else {
            entry.target.classList.remove('animate'); // <-- reset for scroll up
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

const photoImg = document.querySelector('.my-photo img');

if (photoImg) {
    photoImg.addEventListener('mouseover', () => {
        const darkMode = localStorage.getItem('darkMode');

        photoImg.src = darkMode === 'active'
            ? 'assets/piecenight.png'
            : 'assets/halfpiece.png';
    });

    photoImg.addEventListener('mouseout', () => {
        const darkMode = localStorage.getItem('darkMode');

        photoImg.src = darkMode === 'active'
            ? 'assets/nightformal.png'
            : 'assets/formal.png';
    });
}

