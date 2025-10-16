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

// Initialize AOS and other functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

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
