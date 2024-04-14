document.addEventListener('DOMContentLoaded', () => {
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0; // Start at the first slide

    // Ensure the first slide is visible
    if (carouselSlides.length > 0) {
        carouselSlides[currentIndex].style.opacity = '1';
    }

    document.getElementById('prev-slide').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselSlides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.getElementById('next-slide').addEventListener('click', () => {
        currentIndex = (currentIndex === carouselSlides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    function updateCarousel() {
        carouselSlides.forEach((slide, index) => {
            slide.style.opacity = (index === currentIndex) ? '1' : '0';
        });
    }
});









