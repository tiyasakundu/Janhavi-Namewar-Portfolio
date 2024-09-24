window.onload = function() {
    // Show the name bubble first
    setTimeout(() => {
        document.querySelector('.bubble-name').classList.add('show');
    }, 300); // Delay for name bubble

    // Show the first bubble after the name bubble
    setTimeout(() => {
        document.querySelector('.bubble-1').classList.add('show');
    }, 1000); // Delay for the first bubble

    // Show the second bubble after the first bubble animation
    setTimeout(() => {
        document.querySelector('.bubble-2').classList.add('show');
    }, 2000); // Delay for the second bubble

    // Show the resume button after the second bubble
    setTimeout(() => {
        document.querySelector('.resume-bubble').classList.add('show');
    }, 3000); // Delay for the resume button
};

// Scroll detection for sticky navbar
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
};

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const carouselInner = carousel.querySelector('.carousel-track');
    const carouselContent = Array.from(carouselInner.children);
    
    // Clone each item and append to the track for infinite effect
    carouselContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        carouselInner.appendChild(duplicatedItem);
    });

    // Set initial animation
    carouselInner.style.animation = "move 30s linear infinite";

    // Pause animation on hover
    carouselInner.addEventListener('mouseenter', () => {
        carouselInner.style.animationPlayState = 'paused'; // Pause the animation
    });

    // Resume animation when hover ends
    carouselInner.addEventListener('mouseleave', () => {
        carouselInner.style.animationPlayState = 'running'; // Resume the animation
    });
});
