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

// Function to apply or remove infinite animation based on screen size
function handleCarouselAnimation() {
    carousels.forEach(carousel => {
        const carouselInner = carousel.querySelector('.carousel-track');
        const carouselContent = Array.from(carouselInner.children);
        
        // Remove any previously cloned items to prevent duplication
        while (carouselInner.children.length > carouselContent.length) {
            carouselInner.removeChild(carouselInner.lastChild);
        }

        // Clone each item and append to the track for infinite effect
        carouselContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            carouselInner.appendChild(duplicatedItem);
        });

        // Check screen width and apply animation only if width is above 1024px
        if (window.innerWidth > 1024) {
            // Set initial animation for larger screens
            carouselInner.style.animation = "move 30s linear infinite";

            // Enable hover pause/resume on larger screens
            carouselInner.addEventListener('mouseenter', () => {
                carouselInner.style.animationPlayState = 'paused'; // Pause the animation
            });

            carouselInner.addEventListener('mouseleave', () => {
                carouselInner.style.animationPlayState = 'running'; // Resume the animation
            });
        } else {
            // Remove animation for smaller screens and enable horizontal scrolling
            carouselInner.style.animation = 'none'; // Disable animation
            carouselInner.style.overflowX = 'auto'; // Enable horizontal scrolling
            carouselInner.style.scrollBehavior = 'smooth'; // Smooth scrolling

            // Add event listener for horizontal scroll (optional functionality)
            carouselInner.addEventListener('scroll', () => {
                // Optional functionality on scroll (you can add code here if needed)
            });

            // Hide the scrollbar for a cleaner look
            carouselInner.style.scrollbarWidth = 'none'; // Firefox
            carouselInner.style.msOverflowStyle = 'none'; // IE/Edge
        }

    });
}

// Run on page load
handleCarouselAnimation();

// Re-check when window is resized
window.addEventListener('resize', handleCarouselAnimation);



window.addEventListener('load', () => {
    document.querySelectorAll('.cards-container .card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('show');
    });
});

window.onload = function() {
    // Function to handle the image animation on scroll
    function animateImageOnScroll(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('project-image-visible'); // Add visible class to the image
                }, index * 200); // Stagger animations by 200ms intervals
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }

    // Create an IntersectionObserver to watch the project images
    const observer = new IntersectionObserver(animateImageOnScroll, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Select all project images
    const projectImages = document.querySelectorAll('.project-image');

    // Observe each project image
    projectImages.forEach(image => {
        observer.observe(image);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    function toggleMenu() {
        const menu = document.querySelector('nav ul');
        const hamburger = document.querySelector('.hamburger');
        const cross = document.querySelector('.cross');

        // Toggle the menu and icons
        menu.classList.toggle('show');
        hamburger.classList.toggle('hidden');
        cross.classList.toggle('visible');
    }

    // Close the menu when a menu item is clicked
    function closeMenu() {
        const menu = document.querySelector('nav ul');
        const hamburger = document.querySelector('.hamburger');
        const cross = document.querySelector('.cross');

        menu.classList.remove('show');
        hamburger.classList.remove('hidden');
        cross.classList.remove('visible');
    }

    // Add event listener for hamburger click
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    // Add event listener for cross click
    document.querySelector('.cross').addEventListener('click', toggleMenu);

    // Close the menu when any menu item is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});


// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block"; // Show button
    } else {
        scrollUpBtn.style.display = "none"; // Hide button
    }
};

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}


function reveal() {
    var reveals = document.querySelectorAll(".project-card");
    var revealTitle = document.querySelectorAll(".title");
    var revealTitleH1 = document.querySelectorAll(".title h1, .typing-dots.heading-dots");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }    
    // for (var i = 0; i < revealTitle.length; i++) {
    //   var windowHeight = window.innerHeight;
    //   var elementTop = revealTitle[i].getBoundingClientRect().top;
    //   var elementVisible = 200;
  
    //   if (elementTop < windowHeight - elementVisible) {
    //     // revealTitle[i].classList.add("active");
    //   } else {
    //     // revealTitle[i].classList.remove("active");
    //   }
    // }

    for (var i = 0; i < revealTitleH1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealTitleH1[i].getBoundingClientRect().top;
        var elementVisible = 100;
    
        if (elementTop < windowHeight - elementVisible) {
            revealTitleH1[i].classList.add("animate");}
        // } else {
        //     revealTitleH1[i].classList.remove("active");
        // }
      }
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", reveal, {passive: true});
});
  