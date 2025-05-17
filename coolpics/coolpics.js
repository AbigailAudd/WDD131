document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const imageViewer = document.querySelector(".image-viewer");
    const viewerImage = imageViewer.querySelector("img");
    const closeViewer = imageViewer.querySelector(".close-viewer");

    // Toggle menu
    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Handle window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    function handleResize() {
        if (window.innerWidth >= 1000) {
            navLinks.classList.remove("show");
        }
    }

    // Image viewer functionality
    document.querySelectorAll(".gallery img").forEach(image => {
        image.addEventListener("click", function() {
            const imgSrc = image.src.replace("-sm", "-full");
            viewerImage.src = imgSrc;
            viewerImage.alt = image.alt;
            imageViewer.showModal();
        });
    });

    // Close viewer
    closeViewer.addEventListener("click", function() {
        imageViewer.close();
    });

    // Close viewer when clicking outside the image
    imageViewer.addEventListener("click", function(event) {
        if (event.target === imageViewer) {
            imageViewer.close();
        }
    });
});
