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
    
        document.getElementById("truble-image").innerHTML = "<img src='images/Truble SVG.svg' height=0 width=0 />";
        // document.getElementById("immersive-image").innerHTML = "<img src='images/Siemens.svg' height=0 width=0 />";
        // document.getElementById("finview-image").innerHTML = "<img src='images/Finvue SVG.svg' height=0 width=0 />";
        // document.getElementById("mmi-image").innerHTML = "<img src='images/MMI SVG.svg' height=0 width=0 />";
        // document.getElementById("ecoglee-image").innerHTML = "<img src='images/Ecoglee SVG.svg' height=0 width=0 />";
        // document.getElementById("emosign-image").innerHTML = "<img src='images/Emosign.svg' height=0 width=0 />";
        // document.getElementById("fabindia-image").innerHTML = "<img src='images/Fabindia packaging SVG.svg' height=0 width=0 />";
        // document.getElementById("superstitions-image").innerHTML = "<img src='images/Superstition SVG.svg' height=0 width=0 />";
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



window.addEventListener('load', () => {
    document.querySelectorAll('.cards-container .card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('show');
    });
});

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
    var reveals = document.querySelectorAll(".project-card, .about-me-card, .hobby-card");
    var revealcard = document.querySelectorAll(".card");
    var revealTitle = document.querySelectorAll(".title");
    var revealTitleH1 = document.querySelectorAll(".title h1, .typing-dots.heading-dots");

  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");}
    //   } else {
    //     reveals[i].classList.remove("active");
    //   }
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

      for (var i = 0; i < revealcard.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealcard[i].getBoundingClientRect().top;
        var elementVisible = 280;
    
        if (elementTop < windowHeight - elementVisible) {
            revealcard[i].classList.add("active");}
        // } else {
        //     revealTitleH1[i].classList.remove("active");
        // }
      }
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", reveal, {passive: true});
});
  

document.addEventListener("DOMContentLoaded", function() {
    var typingDots = document.querySelector('.typing-dots.project-dots');
    var firstCard = document.querySelector(".p-card"); // First project card
    var otherCards = document.querySelectorAll(".p-card:not(:first-child)"); // All other cards

    // Show typing dots on page load
    typingDots.classList.add("active");

    // After 3 seconds, hide typing dots and show the first card without scrolling
    setTimeout(function() {
        typingDots.classList.remove("active");
        firstCard.classList.add("active"); // Reveal the first card
    }, 750); // Delay for typing dots

    // Function to reveal other cards on scroll
    function revealOnScroll() {
        var windowHeight = window.innerHeight;

        otherCards.forEach(function(card, index) {
            var elementTop = card.getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                card.classList.add("active"); // Reveal the card when it comes into view
            }
            // else {
            //     card.classList.remove("active");
            //   }
        });
    }

    // Attach the scroll event for the other cards
    window.addEventListener("scroll", revealOnScroll);
});



// Select the arrow element
const arrow = document.querySelector('.arrow');

// Select the experience section
const experienceSection = document.querySelector('#tagline');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the experience section is in view
        if (entry.isIntersecting) {
            // Hide the arrow when experience section is in view
            arrow.style.display = 'none';
        } else {
            // Show the arrow when experience section is out of view (if you want it to reappear)
            arrow.style.display = 'block';
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe the experience section
observer.observe(experienceSection);
