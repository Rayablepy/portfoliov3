
const topnav = document.querySelector('#topnav');
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileNav = document.querySelector('#mobileNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        topnav.classList.add('scrolled');
    } else {
        topnav.classList.remove('scrolled');
    }
});


if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close menu
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.querySelector('.topnav')?.offsetHeight || 80;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});


function highlightActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);
highlightActiveNav();

document.querySelectorAll('.btn-hero-primary, .btn-hero-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent default only for non-link buttons
        if (!this.href) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to hash on page load if present
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            setTimeout(() => {
                const navHeight = document.querySelector('.topnav')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo(0, targetPosition);
            }, 100);
        }
    }
});

const isMobile = () => window.innerWidth < 768;

// Disable certain animations fro mobile
window.addEventListener('load', () => {
    if (isMobile()) {
        document.body.classList.add('mobile-optimized');
    }
});

window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully! ✨');
});

// Ensure keyboard nav works
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
