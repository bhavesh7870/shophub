// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Add animation effect
        button.textContent = 'Added!';
        button.style.background = '#27ae60';

        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = '#fff';
        }, 1000);
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close mobile menu after clicking
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Newsletter subscription
const subscribeBtn = document.querySelector('.subscribe-btn');
const newsletterInput = document.querySelector('.newsletter-form input');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        const email = newsletterInput.value.trim();

        if (email) {
            subscribeBtn.textContent = 'Subscribed!';
            subscribeBtn.style.background = '#27ae60';
            newsletterInput.value = '';

            setTimeout(() => {
                subscribeBtn.textContent = 'Subscribe';
                subscribeBtn.style.background = '#fff';
            }, 2000);
        } else {
            newsletterInput.style.border = '2px solid #e74c3c';
            setTimeout(() => {
                newsletterInput.style.border = 'none';
            }, 2000);
        }
    });
}

// Search functionality (basic)
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.category-card, .product-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});