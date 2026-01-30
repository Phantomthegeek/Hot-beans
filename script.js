// This file contains the JavaScript code for the website. 
// It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Additional JavaScript functionality can be added here
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission
document.getElementById('appForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value;
    const qualification = document.getElementById('qualification').value.trim();
    const portfolio = document.getElementById('portfolio').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!fullName || !email || !phone || !position || !qualification || !portfolio || !skills || !message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // URL validation
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(portfolio)) {
        showFormMessage('Please enter a valid portfolio URL.', 'error');
        return;
    }

    // Success
    showFormMessage('✓ Application submitted successfully! We will contact you shortly.', 'success');
    this.reset();
    
    setTimeout(() => {
        document.getElementById('formMessage').textContent = '';
    }, 5000);
});

function showFormMessage(text, type) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = text;
    messageElement.style.color = type === 'error' ? '#D4715D' : '#6B4423';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.team-card, .job-card, .resource-card, .benefit-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Job Data
const jobsData = [
    {
        id: 1,
        title: "Junior Frontend Developer",
        salary: "£24,000 - £28,000",
        location: "Milton Keynes (2 days office, 3 days remote)",
        type: "hybrid",
        description: "Join our frontend team and create responsive, modern web interfaces.",
        rolesSummary: "You will lead front-end development on client projects, implementing responsive websites and optimizing user experiences. You'll work with modern frameworks and ensure high performance across all browsers.",
        responsibilities: [
            "Develop responsive web interfaces using React/Vue",
            "Collaborate with designers and backend developers",
            "Write clean, maintainable code with proper documentation",
            "Participate in code reviews and pair programming sessions",
            "Optimize website performance and user experience"
        ],
        requirements: [
            "Proficiency in HTML, CSS, and JavaScript",
            "Understanding of React or Vue.js",
            "Experience with version control (Git)",
            "Strong problem-solving skills",
            "Web development qualification or bootcamp completion"
        ],
        benefits: [
            "Competitive salary with annual reviews",
            "Remote work flexibility",
            "Professional development budget",
            "Health insurance",
            "25 days PTO"
        ]
    },
    {
        id: 2,
        title: "Front-End Developer",
        salary: "£32,000 - £38,000",
        location: "Milton Keynes (fully remote)",
        type: "remote",
        description: "Lead front-end development on client projects with modern frameworks.",
        rolesSummary: "You will lead front-end development on client projects, implementing responsive websites and optimizing user experiences. You'll work with modern frameworks and ensure high performance across all browsers.",
        responsibilities: [
            "Lead front-end development of client websites",
            "Implement responsive design and cross-browser compatibility",
            "Mentor junior developers",
            "Optimize website performance and user experience",
            "Collaborate with backend team on API integration"
        ],
        requirements: [
            "2+ years of professional frontend development",
            "Advanced knowledge of React or Vue.js",
            "Understanding of responsive design principles",
            "Experience with Git and CI/CD pipelines",
            "Strong communication skills"
        ],
        benefits: [
            "Competitive salary with bonus",
            "100% remote work",
            "Professional development budget",
            "Premium health insurance",
            "30 days PTO",
            "Flexible working hours"
        ]
    },
    {
        id: 3,
        title: "Back-End Developer",
        salary: "£28,000 - £34,000",
        location: "Milton Keynes (3 days office, 2 days remote)",
        type: "hybrid",
        description: "Build robust server-side applications and APIs.",
        rolesSummary: "Join our backend team and develop robust server-side applications. You'll work with modern frameworks and databases to build scalable solutions serving thousands of users.",
        responsibilities: [
            "Build RESTful APIs and microservices",
            "Design and optimize databases",
            "Implement security best practices",
            "Troubleshoot and optimize performance",
            "Work with DevOps on deployment strategies"
        ],
        requirements: [
            "Proficiency in Node.js or Python",
            "Understanding of relational and NoSQL databases",
            "RESTful API development experience",
            "Version control with Git",
            "Web development qualification or bootcamp completion"
        ],
        benefits: [
            "Competitive salary with annual reviews",
            "Hybrid work arrangement",
            "Professional development budget",
            "Health insurance",
            "25 days PTO"
        ]
    },
    {
        id: 4,
        title: "Senior Back-End Developer",
        salary: "£45,000 - £55,000",
        location: "Milton Keynes (5 days office)",
        type: "onsite",
        description: "Lead backend architecture and mentor junior developers.",
        rolesSummary: "Lead backend architecture decisions and mentor a team of developers. You'll be responsible for designing scalable systems and best practices.",
        responsibilities: [
            "Design and architect backend systems",
            "Lead a team of junior/mid-level developers",
            "Implement security and performance best practices",
            "Review and mentor code quality",
            "Contribute to technical strategy and decisions"
        ],
        requirements: [
            "5+ years of backend development experience",
            "Advanced knowledge of Node.js or Python",
            "Experience with microservices architecture",
            "Leadership and mentoring experience",
            "Knowledge of DevOps and cloud platforms"
        ],
        benefits: [
            "Competitive salary with performance bonus",
            "On-site role with relocation support",
            "Premium health insurance",
            "Pension scheme",
            "30 days PTO",
            "Learning and development budget"
        ]
    },
    {
        id: 5,
        title: "Full-Stack Developer",
        salary: "£30,000 - £38,000",
        location: "Milton Keynes (flexible hybrid)",
        type: "hybrid",
        description: "Build complete web applications from concept to deployment.",
        rolesSummary: "We seek talented Full Stack Developers who can work across the entire development stack. Build complete web applications from concept to deployment with our innovative team.",
        responsibilities: [
            "Develop end-to-end web applications",
            "Manage deployment and DevOps processes",
            "Collaborate across frontend and backend teams",
            "Contribute to technical decision-making",
            "Participate in code reviews and testing"
        ],
        requirements: [
            "Proficiency in frontend and backend technologies",
            "Experience with JavaScript frameworks",
            "Database management skills",
            "Understanding of web security",
            "Git and version control experience"
        ],
        benefits: [
            "Competitive salary with bonus",
            "Flexible hybrid arrangement",
            "Professional development budget",
            "Health insurance",
            "28 days PTO"
        ]
    },
    {
        id: 6,
        title: "React Developer",
        salary: "£35,000 - £42,000",
        location: "Milton Keynes (100% remote)",
        type: "remote",
        description: "Specialize in React development for cutting-edge web applications.",
        rolesSummary: "Build modern, high-performance React applications. You'll work with the latest technologies and contribute to innovative frontend solutions.",
        responsibilities: [
            "Develop React components and applications",
            "Implement state management solutions",
            "Optimize application performance",
            "Work with REST APIs and GraphQL",
            "Contribute to component library development"
        ],
        requirements: [
            "Advanced React knowledge",
            "Experience with state management (Redux/Context)",
            "Knowledge of modern JavaScript (ES6+)",
            "Experience with testing frameworks",
            "Portfolio of React projects"
        ],
        benefits: [
            "Top-tier salary with bonus",
            "100% remote work",
            "Premium tech setup allowance",
            "Professional development budget",
            "Unlimited PTO"
        ]
    }
];

// Modal and Job Listing Functions
const modal = document.getElementById('jobModal');
const closeBtn = document.querySelector('.close');
const jobListing = document.getElementById('jobListing');
const workTypeFilter = document.getElementById('workTypeFilter');

// Render job listings
function renderJobs(filter = 'all') {
    jobListing.innerHTML = '';
    
    const filteredJobs = filter === 'all' 
        ? jobsData 
        : jobsData.filter(job => job.type === filter);

    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <div class="job-salary">${job.salary} per annum</div>
            <div class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
            <span class="job-badge">${job.type}</span>
            <p class="job-description">${job.description}</p>
            <button class="job-view-btn" onclick="openJobModal(${job.id})">View details</button>
        `;
        jobListing.appendChild(jobCard);
    });
}

// Open job modal
function openJobModal(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-job-header">
            <h2 class="modal-job-title">${job.title}</h2>
            <div class="modal-job-meta">
                <div class="modal-job-meta-item">
                    <strong>💷 Salary:</strong> ${job.salary} per annum
                </div>
                <div class="modal-job-meta-item">
                    <strong>📍 Location:</strong> ${job.location}
                </div>
                <div class="modal-job-meta-item">
                    <strong>🏢 Type:</strong> <span class="job-badge">${job.type.toUpperCase()}</span>
                </div>
            </div>
        </div>

        <div class="modal-job-section">
            <h4><i class="fas fa-briefcase"></i> Role Summary</h4>
            <p>${job.rolesSummary}</p>
        </div>

        <div class="modal-job-section">
            <h4><i class="fas fa-tasks"></i> Key Responsibilities</h4>
            <ul>
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-job-section">
            <h4><i class="fas fa-check-circle"></i> Requirements</h4>
            <ul>
                ${job.requirements.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-job-section">
            <h4><i class="fas fa-gift"></i> What We Offer</h4>
            <ul>
                ${job.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>

        <a href="#apply" class="modal-apply-btn" onclick="closeJobModal()">Apply Now</a>
    `;
    
    modal.classList.add('show');
}

// Close modal
function closeJobModal() {
    modal.classList.remove('show');
}

// Event listeners for modal
closeBtn.addEventListener('click', closeJobModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeJobModal();
    }
});

// Filter jobs
workTypeFilter.addEventListener('change', function() {
    renderJobs(this.value);
});

// Initialize jobs on page load
document.addEventListener('DOMContentLoaded', function() {
    renderJobs();
});

// Resources/Courses Data
const resourcesData = [
    {
        id: 1,
        title: "Responsive Web Design",
        level: "Beginner",
        icon: "fas fa-mobile-alt",
        duration: "4 weeks",
        description: "Master HTML, CSS, and responsive design principles. Build pixel-perfect layouts that work across all devices.",
        objectives: [
            "Master HTML5 semantic markup",
            "Advanced CSS3 styling and animations",
            "Responsive design with flexbox and grid",
            "Mobile-first development approach",
            "Cross-browser compatibility testing"
        ],
        skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid"],
        instructor: "Sarah Williams",
        students: 1240,
        rating: 4.8
    },
    {
        id: 2,
        title: "JavaScript Algorithms and Data Structures",
        level: "Intermediate",
        icon: "fas fa-code",
        duration: "6 weeks",
        description: "Learn modern JavaScript from basics to advanced concepts. Master ES6+, async programming, and problem-solving.",
        objectives: [
            "JavaScript fundamentals and ES6+ syntax",
            "Async programming with promises and async/await",
            "Data structures and algorithms",
            "Algorithm problem-solving",
            "Functional programming concepts"
        ],
        skills: ["JavaScript", "ES6+", "Algorithms", "Async", "Problem Solving"],
        instructor: "Marcus Johnson",
        students: 2840,
        rating: 4.9
    },
    {
        id: 3,
        title: "Front-End Development with React",
        level: "Intermediate",
        icon: "fas fa-react",
        duration: "5 weeks",
        description: "Master React and build interactive single-page applications with components and state management.",
        objectives: [
            "React fundamentals and component lifecycle",
            "State management with Redux/Context API",
            "Hooks and functional components",
            "Component composition and reusability",
            "Performance optimization techniques"
        ],
        skills: ["React", "Redux", "Hooks", "Component Design", "State Management"],
        instructor: "Emily Rodriguez",
        students: 2100,
        rating: 4.8
    },
    {
        id: 4,
        title: "Advanced CSS for Modern Web",
        level: "Intermediate",
        icon: "fas fa-paint-brush",
        duration: "3 weeks",
        description: "Master advanced CSS for professional websites. Learn animations, performance, and modern layout techniques.",
        objectives: [
            "CSS animations and transitions",
            "CSS Grid advanced layouts",
            "Performance optimization",
            "CSS preprocessors (SASS/LESS)",
            "CSS architecture and best practices"
        ],
        skills: ["CSS3", "Animations", "Grid", "SASS", "Performance"],
        instructor: "David Chen",
        students: 890,
        rating: 4.7
    },
    {
        id: 5,
        title: "Web Accessibility Essentials",
        level: "Beginner",
        icon: "fas fa-universal-access",
        duration: "2 weeks",
        description: "Build inclusive web applications. Learn semantic HTML, ARIA, and keyboard navigation.",
        objectives: [
            "Semantic HTML and accessibility",
            "ARIA roles and attributes",
            "Keyboard navigation and focus management",
            "Screen reader optimization",
            "Accessibility testing and auditing"
        ],
        skills: ["Accessibility", "Semantic HTML", "ARIA", "Testing", "Inclusive Design"],
        instructor: "Lisa Anderson",
        students: 650,
        rating: 4.9
    },
    {
        id: 6,
        title: "Back-End Development with Node.js",
        level: "Intermediate",
        icon: "fas fa-server",
        duration: "6 weeks",
        description: "Build robust server-side applications with Node.js and Express. Master REST API development.",
        objectives: [
            "Node.js and Express framework",
            "REST API design and implementation",
            "Database design and SQL",
            "Authentication and authorization",
            "Error handling and logging"
        ],
        skills: ["Node.js", "Express", "REST APIs", "SQL", "Backend Development"],
        instructor: "Marcus Park",
        students: 1520,
        rating: 4.8
    },
    {
        id: 7,
        title: "Database Design with SQL",
        level: "Intermediate",
        icon: "fas fa-database",
        duration: "4 weeks",
        description: "Master database design and SQL. Learn to model data, write efficient queries, and optimize performance.",
        objectives: [
            "Database design principles",
            "SQL fundamentals and advanced queries",
            "Indexing and performance tuning",
            "Normalization and schema design",
            "Backup and recovery strategies"
        ],
        skills: ["SQL", "Database Design", "Indexing", "Optimization", "NoSQL"],
        instructor: "Robert Wilson",
        students: 980,
        rating: 4.7
    },
    {
        id: 8,
        title: "Full Stack Development Bootcamp",
        level: "Advanced",
        icon: "fas fa-layer-group",
        duration: "8 weeks",
        description: "Build a complete full-stack application. Combine frontend and backend skills in real-world projects.",
        objectives: [
            "Project planning and architecture",
            "Frontend development with React",
            "Backend development with Node.js",
            "Database integration",
            "Deployment and DevOps basics"
        ],
        skills: ["Full Stack", "Project Management", "React", "Node.js", "Deployment"],
        instructor: "John Smith",
        students: 540,
        rating: 4.9
    },
    {
        id: 9,
        title: "Version Control with Git",
        level: "Beginner",
        icon: "fas fa-code-branch",
        duration: "2 weeks",
        description: "Master Git and GitHub. Learn version control, collaboration, and professional workflows.",
        objectives: [
            "Git fundamentals and workflow",
            "GitHub collaboration and pull requests",
            "Branching strategies",
            "Merge conflict resolution",
            "CI/CD pipeline basics"
        ],
        skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"],
        instructor: "Alex Turner",
        students: 1890,
        rating: 4.8
    },
    {
        id: 10,
        title: "API Development Masterclass",
        level: "Intermediate",
        icon: "fas fa-plug",
        duration: "5 weeks",
        description: "Build production-ready APIs. Learn best practices for API design, authentication, and scalability.",
        objectives: [
            "RESTful API design principles",
            "Authentication and JWT tokens",
            "Error handling and validation",
            "Rate limiting and caching",
            "API documentation with Swagger"
        ],
        skills: ["Node.js", "API Design", "Authentication", "Validation", "Documentation"],
        instructor: "Sophie Martin",
        students: 1200,
        rating: 4.9
    },
    {
        id: 11,
        title: "DevOps and Deployment",
        level: "Advanced",
        icon: "fas fa-cogs",
        duration: "5 weeks",
        description: "Deploy applications to production. Learn Docker, CI/CD, cloud platforms, and monitoring.",
        objectives: [
            "Docker containerization",
            "CI/CD pipelines with GitHub Actions",
            "Cloud deployment (AWS/Heroku)",
            "Server configuration and monitoring",
            "Performance optimization"
        ],
        skills: ["Docker", "CI/CD", "Cloud", "DevOps", "Monitoring"],
        instructor: "Kevin Brown",
        students: 780,
        rating: 4.7
    },
    {
        id: 12,
        title: "TypeScript Fundamentals",
        level: "Intermediate",
        icon: "fas fa-cube",
        duration: "3 weeks",
        description: "Add type safety to JavaScript. Learn TypeScript to write robust and maintainable code.",
        objectives: [
            "TypeScript fundamentals and types",
            "Interfaces and type definitions",
            "Generics and advanced types",
            "React with TypeScript",
            "TypeScript best practices"
        ],
        skills: ["TypeScript", "Type Safety", "React", "Best Practices"],
        instructor: "Nina Lee",
        students: 650,
        rating: 4.8
    }
];

// Resources functionality
const resourcesGrid = document.getElementById('resourcesGrid');
const resourceSearch = document.getElementById('resourceSearch');
const resourceCount = document.getElementById('resourceCount');
const resourceModal = document.getElementById('resourceModal');
const resourceCloseBtn = document.querySelector('#resourceModal .close');
const resourceModalBody = document.getElementById('resourceModalBody');

// Render resources
function renderResources(filter = '') {
    resourcesGrid.innerHTML = '';
    
    const filtered = filter === ''
        ? resourcesData
        : resourcesData.filter(resource => 
            resource.title.toLowerCase().includes(filter.toLowerCase()) ||
            resource.description.toLowerCase().includes(filter.toLowerCase()) ||
            resource.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
        );

    resourceCount.textContent = `Showing ${filtered.length} of ${resourcesData.length} resources`;

    if (filtered.length === 0) {
        resourcesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-light);">No resources found. Try a different search.</p>';
        return;
    }

    filtered.forEach(resource => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <div class="resource-header">
                <i class="${resource.icon}"></i>
                <h3>${resource.title}</h3>
                <span class="resource-level">${resource.level}</span>
            </div>
            <div class="resource-body">
                <p class="resource-description">${resource.description}</p>
                <div class="resource-info">
                    <div class="resource-info-item">
                        <i class="fas fa-clock"></i> ${resource.duration}
                    </div>
                    <div class="resource-info-item">
                        <i class="fas fa-users"></i> ${resource.students}
                    </div>
                    <div class="resource-info-item">
                        <i class="fas fa-star"></i> ${resource.rating}
                    </div>
                </div>
                <div class="resource-footer">
                    <div class="resource-skills">
                        ${resource.skills.map(skill => `<span class="resource-skill-badge">${skill}</span>`).join('')}
                    </div>
                    <button class="resource-view-btn" onclick="openResourceModal(${resource.id})">View Details</button>
                </div>
            </div>
        `;
        resourcesGrid.appendChild(resourceCard);
    });
}

// Open resource modal
function openResourceModal(resourceId) {
    const resource = resourcesData.find(r => r.id === resourceId);
    
    resourceModalBody.innerHTML = `
        <div class="resource-modal-header">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <i class="${resource.icon}" style="font-size: 2.5rem;"></i>
                <div>
                    <h2 class="resource-modal-title">${resource.title}</h2>
                    <p style="margin: 0; font-size: 0.95rem; opacity: 0.9;">By ${resource.instructor}</p>
                </div>
            </div>
            <div class="resource-modal-meta">
                <div class="resource-modal-meta-item">
                    <i class="fas fa-chart-line"></i>
                    <strong>${resource.level}</strong>
                </div>
                <div class="resource-modal-meta-item">
                    <i class="fas fa-clock"></i>
                    <strong>${resource.duration}</strong>
                </div>
                <div class="resource-modal-meta-item">
                    <i class="fas fa-users"></i>
                    <strong>${resource.students} students</strong>
                </div>
                <div class="resource-modal-meta-item">
                    <i class="fas fa-star"></i>
                    <strong>${resource.rating} rating</strong>
                </div>
            </div>
        </div>

        <div class="resource-section">
            <h4><i class="fas fa-info-circle"></i> Course Description</h4>
            <p>${resource.description}</p>
        </div>

        <div class="resource-section">
            <h4><i class="fas fa-target"></i> Learning Objectives</h4>
            <ul>
                ${resource.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>

        <div class="resource-section">
            <h4><i class="fas fa-check"></i> Skills You'll Learn</h4>
            <div class="resource-skills">
                ${resource.skills.map(skill => `<span class="resource-skill-badge">${skill}</span>`).join('')}
            </div>
        </div>

        <button class="resource-enroll-btn" onclick="closeResourceModal(); document.querySelector('#apply').scrollIntoView({behavior: 'smooth'});">
            <i class="fas fa-sign-in-alt"></i> Start Learning
        </button>
    `;
    
    resourceModal.classList.add('show');
}

// Close resource modal
function closeResourceModal() {
    resourceModal.classList.remove('show');
}

// Search resources
if (resourceSearch) {
    resourceSearch.addEventListener('input', function() {
        renderResources(this.value);
    });
}

// Close modal events
if (resourceCloseBtn) {
    resourceCloseBtn.addEventListener('click', closeResourceModal);
}

window.addEventListener('click', function(event) {
    if (event.target === resourceModal) {
        closeResourceModal();
    }
});

// Initialize resources on page load
document.addEventListener('DOMContentLoaded', function() {
    if (resourcesGrid) {
        renderResources();
    }
});

// Trainees Data
const traineesData = [
    {
        id: 1,
        name: "Osato Kareem",
        track: "Full Stack Development",
        bio: "Passionate developer learning full-stack development. Building projects with React and Node.js.",
        skills: ["React", "Node.js", "JavaScript", "CSS", "Git"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        track: "Frontend Development",
        bio: "Aspiring frontend developer focused on creating beautiful and responsive user interfaces.",
        skills: ["React", "HTML", "CSS", "JavaScript", "UI/UX"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    },
    {
        id: 3,
        name: "Marcus Chen",
        track: "Backend Development",
        bio: "Learning backend development with a focus on building scalable APIs and databases.",
        skills: ["Node.js", "Express", "MongoDB", "SQL", "API Design"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        track: "Full Stack Development",
        bio: "Full stack trainee excited about building complete web applications from scratch.",
        skills: ["React", "Node.js", "PostgreSQL", "DevOps", "Docker"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    },
    {
        id: 5,
        name: "David Park",
        track: "Frontend Development",
        bio: "Career changer learning frontend development. Focused on mastering modern JavaScript.",
        skills: ["JavaScript", "React", "TypeScript", "CSS3", "Testing"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    },
    {
        id: 6,
        name: "Lisa Anderson",
        track: "Web Development",
        bio: "Enthusiastic learner exploring all aspects of web development with a focus on accessibility.",
        skills: ["Web Dev", "Accessibility", "HTML", "CSS", "JavaScript"],
        github: "#",
        linkedin: "#",
        twitter: "#"
    }
];

// Render Trainees
function renderTrainees() {
    const traineesGrid = document.getElementById('traineesGrid');
    
    if (!traineesGrid) return;
    
    traineesGrid.innerHTML = '';
    
    traineesData.forEach(trainee => {
        const traineeCard = document.createElement('div');
        traineeCard.className = 'trainee-card';
        traineeCard.innerHTML = `
            <div class="trainee-image">
                <i class="fas fa-user-graduate"></i>
            </div>
            <div class="trainee-info">
                <h3>${trainee.name}</h3>
                <p class="trainee-track">${trainee.track}</p>
                <p class="trainee-bio">${trainee.bio}</p>
                <div class="trainee-skills">
                    ${trainee.skills.map(skill => `<span class="trainee-skill">${skill}</span>`).join('')}
                </div>
                <div class="trainee-social">
                    <a href="${trainee.github}" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="${trainee.linkedin}" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="${trainee.twitter}" title="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
        traineesGrid.appendChild(traineeCard);
    });
}

// Initialize trainees on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTrainees();
});