// ============================================
// DOWNLOAD RESUME FUNCTION
// ============================================

function downloadResume() {
    // Create a new anchor element
    const link = document.createElement('a');

    // Set the file to download
    // Make sure your PDF file is named "RagibShahriar01.pdf" in the same directory
    link.href = 'RagibShahriar01.pdf';

    // Set the downloaded file name
    link.download = 'Ragib_Shahriar_Resume.pdf';

    // Add link to body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove link from body
    document.body.removeChild(link);

    // Show alert with instructions
    alert('Resume download initiated!\n\nNote: Make sure your PDF file "RagibShahriar01.pdf" is in the same directory as this HTML file.');
}


// ============================================
// PLAY VIDEO FUNCTION
// ============================================

function playVideo() {
    // Show instructions for adding video
    alert('Video Player\n\nThis is where your self-introduction video will play.\n\nTo add your video:\n1. Replace the placeholder with an <iframe> tag\n2. Use services like YouTube, Vimeo, or Loom\n3. Or embed an HTML5 <video> element\n\nExample:\n<iframe width="100%" height="100%" src="your-video-url" frameborder="0" allowfullscreen></iframe>');
}


// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default if href is just "#"
        if (href !== '#') {
            e.preventDefault();

            // Get the target element
            const target = document.querySelector(href);

            if (target) {
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


// ============================================
// SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
// ============================================

// Configuration for the observer
const observerOptions = {
    threshold: 0.1,                    // Trigger when 10% of element is visible
    rootMargin: '0px 0px -100px 0px'  // Trigger 100px before element enters view
};

// Create the observer
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        // When element enters the viewport
        if (entry.isIntersecting) {
            // Apply fade in animation
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all elements that need animation
document.querySelectorAll(
    '.skill-card, .project-card, .experience-card, .timeline-item'
).forEach(el => {
    observer.observe(el);
});


// ============================================
// NAVIGATION UNDERLINE EFFECT
// ============================================

// Optional: Add active state to navigation links based on scroll position
window.addEventListener('scroll', function () {
    let current = '';

    // Get all sections
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // If this section is in view
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Update active link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


// ============================================
// ADD HOVER EFFECTS TO CARDS
// ============================================

// Add dynamic class for browsers that don't support CSS hover
document.querySelectorAll('.skill-card, .project-card, .experience-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});


// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');

    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
    }
});


// ============================================
// SOCIAL LINKS ANIMATION
// ============================================

document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});


// ============================================
// BUTTON RIPPLE EFFECT (Optional)
// ============================================

document.querySelectorAll('.btn, .nav-cta').forEach(button => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');

        // Get position
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Add ripple style
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';

        // Add ripple to button
        if (this.style.position !== 'absolute') {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        }

        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});


// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function (e) {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }

    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});


// ============================================
// SCROLL TO TOP BUTTON
// ============================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
scrollToTopBtn.addEventListener('click', function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
});


// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================

function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.getAttribute('data-theme') === 'dark';

    if (isDarkMode) {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
});


// ============================================
// FORM VALIDATION (If you add a contact form)
// ============================================

function validateContactForm(form) {
    const name = form.name?.value.trim();
    const email = form.email?.value.trim();
    const message = form.message?.value.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}


// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}


// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Get current scroll position
function getScrollPosition() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS animation class
function animateElement(element, animationName) {
    element.style.animation = `${animationName} 0.8s ease-out forwards`;
}


// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%c Welcome to Ragib Shahriar\'s Portfolio! ', 'background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Feel free to explore the code and reach out! ', 'color: #3b82f6; font-size: 14px;');
console.log('Email: shahriarragib7@gmail.com');
console.log('GitHub: https://github.com/ragibshahriar01');
