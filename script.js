// Mobile navigation functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Form submission handling with validation
const contactForm = document.getElementById('contactForm');
const formFields = contactForm.querySelectorAll('input, textarea');

formFields.forEach(field => {
    field.addEventListener('input', () => {
        if (field.validity.valid) {
            field.style.borderColor = '#4ade80';
        } else {
            field.style.borderColor = '#ef4444';
        }
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    let isValid = true;
    formFields.forEach(field => {
        if (!field.validity.valid) {
            isValid = false;
            field.style.borderColor = '#ef4444';
        }
    });

    if (isValid) {
        // Here you would typically send the form data to a server
        const formData = new FormData(contactForm);
        
        // Show success message
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Message Sent!';
        button.style.backgroundColor = '#4ade80';
        
        // Reset form
        contactForm.reset();
        formFields.forEach(field => {
            field.style.borderColor = '';
        });

        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 3000);
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
