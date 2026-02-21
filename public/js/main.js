// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Expandable Content
const expandBtn = document.getElementById('expand-btn');
const expandableText = document.getElementById('expandable-text');

if (expandBtn && expandableText) {
    expandBtn.addEventListener('click', () => {
        expandableText.classList.toggle('expanded');
        
        if (expandableText.classList.contains('expanded')) {
            expandBtn.innerHTML = '<span>Read Less</span> <i class="fas fa-chevron-up"></i>';
        } else {
            expandBtn.innerHTML = '<span>Read More</span> <i class="fas fa-chevron-down"></i>';
        }
    });
}

// Screenshots Slider
const slider = document.getElementById('screenshots-slider');
const prevBtn = document.getElementById('slider-prev');
const nextBtn = document.getElementById('slider-next');

if (slider && nextBtn) {
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: 270,
            behavior: 'smooth'
        });
    });
}

if (slider && prevBtn) {
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -270,
            behavior: 'smooth'
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').classList.remove('active');
        });
        
        // If clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('active') && 
        !e.target.closest('nav') && 
        !e.target.closest('.mobile-menu-btn')) {
        mainNav.classList.remove('active');
    }
});
