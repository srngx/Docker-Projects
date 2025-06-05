// JavaScript for static web application

// Function to show message on home page
function showMessage() {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.innerHTML = '<p>Hello! This is a Java-based static web application built with Maven.</p>';
        messageDiv.classList.remove('hidden');
        
        // Hide message after 3 seconds
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 3000);
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                showFormMessage('Thank you! Your message has been received.', 'success');
                
                // Reset form
                contactForm.reset();
            } else {
                showFormMessage('Please fill in all fields.', 'error');
            }
        });
    }
});

// Function to show form messages
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        messageDiv.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    }
}

// Add smooth scrolling to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});

// Add loading animation for better UX
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Feature hover effects
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
