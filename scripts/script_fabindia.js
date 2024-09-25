// Scroll detection for sticky navbar
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
};

// Select carousel and arrows
const carouselTrack = document.querySelector('.carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Function to check if at the start or end and hide/show arrows
function checkArrows() {
    const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    
    // Hide left arrow if at the start
    if (carouselTrack.scrollLeft <= 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
    }
    
    // Hide right arrow if at the end
    if (carouselTrack.scrollLeft >= maxScrollLeft) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'block';
    }
}

// Call checkArrows on load to set the initial state
checkArrows();

// Add event listener to scroll event to check arrow visibility during scroll
carouselTrack.addEventListener('scroll', checkArrows);

// Arrow click functionality
leftArrow.addEventListener('click', () => {
    // Scroll left by the width of one image plus its margin
    const imgWidth = document.querySelector('.carousel-img').clientWidth + 40; // Add margin
    carouselTrack.scrollBy({
        left: -imgWidth,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    // Scroll right by the width of one image plus its margin
    const imgWidth = document.querySelector('.carousel-img').clientWidth + 40; // Add margin
    carouselTrack.scrollBy({
        left: imgWidth,
        behavior: 'smooth'
    });
});



//2nd carousel

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
    const carouselInner = document.querySelector('.carousel-inner-2');
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
showSlide(currentSlide)