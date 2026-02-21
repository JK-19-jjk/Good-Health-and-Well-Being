
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all slides
    const slides = document.querySelectorAll(".slide");
    
    // Set the first slide as active immediately - no delay
    if (slides.length > 0) {
        // Make first slide visible immediately with no transition
        slides[0].style.opacity = "1";
        slides[0].classList.add("active");
        
        // Pre-load all images to prevent delays
        slides.forEach(slide => {
            if (slide.tagName === "IMG") {
                // Force browser to load image
                const img = new Image();
                img.src = slide.src;
            }
        });
    }
    
    // Track current slide
    let currentIndex = 0;
    
    // Function to change slides
    function changeSlide() {
        // Remove active class from current slide
        slides[currentIndex].classList.remove("active");
        
        // Move to next slide (loop back to first if at the end)
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentIndex].classList.add("active");
    }
    
    // Change slides every 3 seconds (reduced from 4 seconds)
    setInterval(changeSlide, 3000);
});