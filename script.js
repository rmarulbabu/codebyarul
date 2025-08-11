// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    
    // Animate hamburger menu
    const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
    if (mobileMenu.classList.contains('show')) {
        lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
});

// Navigation Active State
function updateActiveNavigation() {
    const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
    let current = 'home';

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section;
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 64; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    mobileMenu.classList.remove('show');
    const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
}

// Add click events to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        scrollToSection(section);
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    console.log('Contact form submitted:', data);
    alert('Message sent successfully! (This is a demo)');
    contactForm.reset();
});

// Populate Skills Section
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    portfolioData.skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Animate skill bars when they come into view
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }, 300);
}

// Populate Services Section
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';

    portfolioData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                ${service.icon}
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate Portfolio Section
function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-card';
        portfolioCard.innerHTML = `
            <div class="portfolio-image-container">
                <img src="${project.image}" alt="${project.title}" class="portfolio-image">
                <div class="portfolio-overlay"></div>
            </div>
            <div class="portfolio-content">
                <span class="portfolio-category">${project.category}</span>
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="#" class="portfolio-link">
                    View Details 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                    </svg>
                </a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioCard);
    });
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll('.section-header, .hero-content, .about-content, .service-card, .portfolio-card, .contact-content');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateServices();
    populatePortfolio();
    setupAnimations();
    
    // Set initial active nav state
    updateActiveNavigation();
});

// Update navigation on scroll
window.addEventListener('scroll', () => {
    updateActiveNavigation();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('show');
        const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
});

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});