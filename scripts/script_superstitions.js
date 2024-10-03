// Scroll detection for sticky navbar
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
};


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    // Remove the 'active' class from all slides
    slides.forEach((slide) => slide.classList.remove('active'));

    // Add the 'active' class to the current slide
    slides[index].classList.add('active');

    // Update transform property for smooth transition
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`; // Move based on the index
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentSlide);
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide
showSlide(currentSlide);

window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none"; // Hide loader once content loads
});


// Get the current URL path
const currentPath = window.location.pathname;

// Get all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through the nav links
navLinks.forEach(link => {
    // If the link's href matches the current page's path, add the 'active' class
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});