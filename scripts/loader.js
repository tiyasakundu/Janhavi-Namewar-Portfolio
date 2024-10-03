// This script will control the transition from loader.html to the actual page

// Redirect to the content page once the page is loaded
window.addEventListener('load', function() {
    // Wait for a short period to show the loader, then redirect to the main page
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to your actual content page (e.g., index.html)
    }, 2000); // Adjust delay to fit your needs
});
