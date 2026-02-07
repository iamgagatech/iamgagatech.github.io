document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.hz-service-card');
    const dots = document.querySelectorAll('.hz-dot');
    
    const observerOptions = {
        root: null,
        threshold: 0.6,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to current card
                entry.target.classList.add('hz-in-view');
                
                // Update progress dots
                const cardNum = entry.target.getAttribute('data-card');
                dots.forEach(dot => {
                    if (dot.getAttribute('data-card') === cardNum) {
                        dot.classList.add('hz-active');
                    } else {
                        dot.classList.remove('hz-active');
                    }
                });
            } else {
                entry.target.classList.remove('hz-in-view');
            }
        });
    }, observerOptions);
    
    cards.forEach(card => observer.observe(card));
    
    // Click dots to scroll to card
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const cardNum = dot.getAttribute('data-card');
            const targetCard = document.querySelector(`.hz-card-${cardNum}`);
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
