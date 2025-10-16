// Video Modal Functions
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    modalVideo.play();
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideoModal();
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu visibility
    if (isExpanded) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        button.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        button.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    menu.classList.add('hidden');
    menu.classList.remove('block');
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        button.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        button.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
}

// Toggle contact form on mobile
function toggleContactForm() {
    const formContainer = document.getElementById('contactFormContainer');
    const toggleIcon = document.getElementById('contactBarToggleIcon');
    const isHidden = formContainer.classList.contains('hidden');
    
    if (isHidden) {
        formContainer.classList.remove('hidden');
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
    } else {
        formContainer.classList.add('hidden');
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
    }
}

// Initialize contact form visibility based on screen size
function initContactForm() {
    const formContainer = document.getElementById('contactFormContainer');
    const toggleButton = document.getElementById('contactBarToggle');
    
    if (window.innerWidth < 768) { // Mobile
        formContainer.classList.add('hidden');
        if (toggleButton) toggleButton.classList.remove('hidden');
    } else { // Desktop
        formContainer.classList.remove('hidden');
        if (toggleButton) toggleButton.classList.add('hidden');
    }
}

// Handle window resize
function handleResize() {
    initContactForm();
    
    // On mobile, ensure the form container is always visible when resizing to desktop
    if (window.innerWidth >= 768) {
        const formContainer = document.getElementById('contactFormContainer');
        formContainer.classList.remove('hidden');
    }
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    menu.classList.add('hidden');
    menu.classList.remove('block');
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
}

// Initialize AOS and other functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
    
    // Mobile menu event listeners
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Initialize contact form
    initContactForm();
    
    // Contact form toggle for mobile
    const contactBarToggle = document.getElementById('contactBarToggle');
    if (contactBarToggle) {
        contactBarToggle.addEventListener('click', toggleContactForm);
    }
    
    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add AOS animations to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.setAttribute('data-aos', 'fade-up');
    });

    // Add animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('data-aos', 'zoom-in');
        img.style.transition = 'transform 0.3s ease-in-out';
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.02)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Handle sticky contact form submission
    // const stickyForm = document.querySelector('.sticky-contact-form');
    // if (stickyForm) {
    //     stickyForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         // Add your form submission logic here
    //         alert('Thank you for your interest! We will contact you shortly.');
    //         this.reset();
    //     });
    // }
    
    // Fix for project location section on mobile
    const locationSection = document.querySelector('#location');
    if (locationSection) {
        locationSection.classList.add('overflow-x-hidden');
    }
});
