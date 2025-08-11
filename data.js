const portfolioData = {
    profile: {
        name: "R Arulbabu",
        title: "Front-End Web Developer",
        tagline: "Turning ideas into beautiful, functional, and impactful digital experiences.",
        image: "https://customer-assets.emergentagent.com/job_webdev-showcase-20/artifacts/wgnto7fu_profile.jpg",
        location: "Kallakurichi, Pushpagiri",
        phone: "+91 9626927722",
        email: "rmarulbabu@gmail.com"
    },
    
    skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Responsive Design", level: 88 },
        { name: "UI/UX Implementation", level: 82 }
    ],

    services: [
        {
            title: "Web Design & Development",
            description: "Custom website development with modern design principles and clean code architecture.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16,18 22,12 16,6"/>
                <polyline points="8,6 2,12 8,18"/>
            </svg>`
        },
        {
            title: "UI/UX Implementation", 
            description: "Converting designs into pixel-perfect, interactive web interfaces with attention to detail.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="13.5" cy="6.5" r=".5"/>
                <circle cx="17.5" cy="10.5" r=".5"/>
                <circle cx="8.5" cy="7.5" r=".5"/>
                <circle cx="6.5" cy="12.5" r=".5"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
            </svg>`
        },
        {
            title: "Responsive Website Creation",
            description: "Mobile-first responsive websites that work flawlessly across all devices and screen sizes.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>`
        },
        {
            title: "API Development & Integration",
            description: "Seamless API integration and development for dynamic, data-driven web applications.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
            </svg>`
        },
        {
            title: "Progressive Web App Development",
            description: "Modern PWAs that combine the best of web and mobile app experiences.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>`
        }
    ],

    projects: [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            technologies: ["React", "JavaScript", "CSS3", "Chart.js"],
            category: "Web Application"
        },
        {
            id: 2, 
            title: "Restaurant Website",
            description: "Modern restaurant website with online menu, reservation system, and interactive gallery showcase.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            category: "Portfolio Web Design"
        },
        {
            id: 3,
            title: "Task Management PWA",
            description: "Progressive web application for team task management with offline capabilities and real-time collaboration.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop", 
            technologies: ["React", "Service Worker", "IndexedDB", "PWA"],
            category: "Progressive Web App"
        },
        {
            id: 4,
            title: "Weather API Integration",
            description: "Dynamic weather application with location-based forecasts and interactive weather maps.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
            technologies: ["JavaScript", "REST API", "Geolocation", "Chart.js"],
            category: "API Development"
        },
        {
            id: 5,
            title: "Portfolio Website Template",
            description: "Responsive portfolio template for creative professionals with smooth animations and modern design.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            category: "Portfolio Web Design"
        },
        {
            id: 6,
            title: "Learning Management System",
            description: "Interactive e-learning platform with course management, progress tracking, and student dashboard.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            category: "Interactive Web Application"
        }
    ]
};